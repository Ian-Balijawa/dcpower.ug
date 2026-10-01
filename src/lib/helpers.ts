import { PRODUCTS, Product } from "../data/products"

export const brandsOf = () =>
  [...new Set(PRODUCTS.map((p) => p.brand))].sort()

export const bySlug = (s: string) =>
  PRODUCTS.find((p) => p.slug === s)

export const search = (q: string, list = PRODUCTS) => {
  const t = q.toLowerCase().split(/\s+/).filter(Boolean)

  return t.length
    ? list.filter((p) =>
      t.every((w) =>
        [
          p.name,
          p.brand,
          p.category,
          p.summary,
          p.description,
          p.sku,
          ...(p.features ?? []),
          ...(p.specs ?? []).flat(),
          ...(p.applications ?? []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(w)
      )
    )
    : list
}

export const similar = (p: Product, n = 4) =>
  PRODUCTS
    .filter((x) => x.id !== p.id)
    .map((x) => ({
      x,
      s:
        (x.category === p.category ? 2 : 0) +
        (x.brand === p.brand ? 1 : 0),
    }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((r) => r.x)
