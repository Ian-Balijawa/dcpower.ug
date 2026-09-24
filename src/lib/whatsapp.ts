import { SITE } from "../config"
import type { Product } from "../data/products"
import { ugx } from "./format"
export const waLink = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
export const orderLink = (lines: { product: Product; qty: number }[]) => {
  const body = lines
    .map(({ product: p, qty }) => `- ${qty} x ${p.name} (${ugx(p.price)})`)
    .join("\n")
  const total = lines.reduce((s, l) => s + (l.product.price ?? 0) * l.qty, 0)
  return waLink(
    `Hello DC Solar, I would like to order:\n${body}\n${total ? `Estimated total: ${ugx(total)}\n` : ""}Please confirm availability and delivery.`
  )
}
