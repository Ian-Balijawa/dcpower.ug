import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import QtyStepper from "../components/QtyStepper"
import { useCart } from "../context/CartContext"
import { bySlug, similar } from "../data/products"
import { useSeo } from "../hooks/useSeo"
import { ugx } from "../lib/format"
import { orderLink } from "../lib/whatsapp"

export default function ProductDetail() {
  const { slug = "" } = useParams()
  const p = bySlug(slug)
  const [img, setImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const { add } = useCart()
  const nav = useNavigate()
  useEffect(() => {
    setImg(0)
    setQty(1)
    setAdded(false)
  }, [slug])
  useSeo({
    title: p?.name ?? "Product not found",
    description: p?.summary ?? "This product is not available.",
    path: `/products/${slug}`,
    jsonLd: p && {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name,
      brand: { "@type": "Brand", name: p.brand },
      description: p.description,
      offers: p.price
        ? {
            "@type": "Offer",
            priceCurrency: "UGX",
            price: p.price,
            availability: "https://schema.org/InStock"
          }
        : undefined
    }
  })
  if (!p)
    return (
      <div className="wrap pad">
        <h1>Product not found</h1>
        <Link to="/products">Back to products</Link>
      </div>
    )
  return (
    <div className="wrap pad">
      <nav className="crumbs small" aria-label="Breadcrumb">
        <Link to="/products">Products</Link> /{" "}
        <Link to={`/products?cat=${encodeURIComponent(p.category)}`}>{p.category}</Link>
      </nav>
      <div className="pd">
        <div className="gallery">
          <img
            className="gal-main"
            src={p.images[img]}
            alt={`${p.name}, view ${img + 1} of ${p.images.length}`}
            width="400"
            height="320"
          />
          <ul className="thumbs">
            {p.images.map((s, i) => (
              <li key={i}>
                <button
                  aria-label={`Show image ${i + 1}`}
                  aria-pressed={i === img}
                  onClick={() => setImg(i)}
                >
                  <img src={s} alt="" width="80" height="64" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="muted">{p.brand}</p>
          <h1>{p.name}</h1>
          <p className="price">{ugx(p.price)}</p>
          <p>{p.description}</p>
          <div className="row buy">
            <QtyStepper value={qty} onChange={setQty} label={p.name} />
            <button
              className="btn"
              onClick={() => {
                add(p.id, qty)
                setAdded(true)
              }}
            >
              Add to cart
            </button>
            <a
              className="btn btn-sun"
              href={orderLink([{ product: p, qty }])}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on WhatsApp
            </a>
          </div>
          <p role="status" className="small ok">
            {added && (
              <>
                Added {qty} to cart.{" "}
                <button className="link" onClick={() => nav("/cart")}>
                  View cart
                </button>
              </>
            )}
          </p>
          <h2 className="h3">Specifications</h2>
          <dl className="specs">
            {p.specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <section aria-labelledby="sim">
        <h2 id="sim">You may also need</h2>
        <div className="grid">
          {similar(p).map((s) => (
            <ProductCard key={s.id} p={s} />
          ))}
        </div>
      </section>
    </div>
  )
}
