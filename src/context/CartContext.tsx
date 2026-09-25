import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react"
import { bySlug, type Product } from "../data/products"
type Line = { id: string; qty: number }
type Act = { t: "add" | "set"; id: string; qty: number } | { t: "rm"; id: string } | { t: "clear" }
const KEY = "dcpower-cart"
const clamp = (n: number) => Math.min(99, Math.max(1, n))
function reduce(s: Line[], a: Act): Line[] {
  switch (a.t) {
    case "add":
      return s.some((l) => l.id === a.id)
        ? s.map((l) => (l.id === a.id ? { ...l, qty: clamp(l.qty + a.qty) } : l))
        : [...s, { id: a.id, qty: clamp(a.qty) }]
    case "set":
      return s.map((l) => (l.id === a.id ? { ...l, qty: clamp(a.qty) } : l))
    case "rm":
      return s.filter((l) => l.id !== a.id)
    case "clear":
      return []
  }
}
const load = (): Line[] => {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]")
  } catch {
    return []
  }
}
interface Ctx {
  lines: { product: Product; qty: number }[]
  count: number
  total: number
  add: (id: string, qty?: number) => void
  setQty: (id: string, qty: number) => void
  remove: (id: string) => void
  clear: () => void
}
const C = createContext<Ctx | null>(null)
export function CartProvider({ children }: { children: ReactNode }) {
  const [s, d] = useReducer(reduce, [], load)
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(s))
    } catch {
      /* storage unavailable */
    }
  }, [s])
  const v = useMemo<Ctx>(() => {
    const lines = s.flatMap((l) => {
      const product = bySlug(l.id)
      return product ? [{ product, qty: l.qty }] : []
    })
    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      total: lines.reduce((n, l) => n + (l.product.price ?? 0) * l.qty, 0),
      add: (id, qty = 1) => d({ t: "add", id, qty }),
      setQty: (id, qty) => d({ t: "set", id, qty }),
      remove: (id) => d({ t: "rm", id }),
      clear: () => d({ t: "clear" })
    }
  }, [s])
  return <C.Provider value={v}>{children}</C.Provider>
}
export const useCart = () => {
  const c = useContext(C)
  if (!c) throw new Error("CartProvider missing")
  return c
}
