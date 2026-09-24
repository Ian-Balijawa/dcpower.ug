import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import type { Product } from "../data/products"
import { ugx } from "../lib/format"
export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart()
  return (
    <article className="card">
      <Link to={`/products/${p.slug}`} className="card-img">
        <img src={p.images[0]} alt={p.name} loading="lazy" width="400" height="320" />
      </Link>
      <div className="card-body">
        <p className="muted small">{p.brand}</p>
        <h3>
          <Link to={`/products/${p.slug}`}>{p.name}</Link>
        </h3>
        <p className="muted small">{p.summary}</p>
        <div className="card-foot">
          <strong className={p.price === null ? "quote" : ""}>{ugx(p.price)}</strong>
          <button
            className="btn btn-sm"
            onClick={() => add(p.id)}
            aria-label={`Add ${p.name} to cart`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
