import { useEffect, useState, type PointerEvent } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import QtyStepper from "../components/QtyStepper"
import { useCart } from "../context/CartContext"
import { bySlug, similar } from "../data/products"
import { useSeo } from "../hooks/useSeo"
import { ugx } from "../lib/format"
import { orderLink } from "../lib/whatsapp"

type Point = { x: number; y: number }

export default function ProductDetail() {
  const { slug = "" } = useParams()
  const p = bySlug(slug)
  const [img, setImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [zoom, setZoom] = useState<Point | null>(null)
  const [copied, setCopied] = useState(false)
  const { add } = useCart()
  const nav = useNavigate()

  useEffect(() => {
    setImg(0)
    setQty(1)
    setAdded(false)
    setZoom(null)
    window.scrollTo(0, 0)
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
      image: p.images,
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

  const hasPrice = Boolean(p.price)
  const count = p.images.length
  const highlights = p.specs.slice(0, 4)
  const related = similar(p)

  const go = (step: number) => setImg((i) => (i + step + count) % count)

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return
    const r = e.currentTarget.getBoundingClientRect()
    setZoom({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100
    })
  }

  const share = async () => {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title: p.name, url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
      }
    } catch {
      /* user cancelled or clipboard blocked */
    }
  }

  return (
    <div className="wrap pad">
      <nav className="crumbs small" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to={`/products?cat=${encodeURIComponent(p.category)}`}>
              {p.category}
            </Link>
          </li>
          <li aria-current="page">{p.name}</li>
        </ol>
      </nav>

      <div className="pd">
        {/* Gallery */}
        <div className="pd-gallery">
          <div
            className={`pd-stage${zoom ? " is-zoomed" : ""}`}
            onPointerMove={onMove}
            onPointerLeave={() => setZoom(null)}
          >
            <img
              className="pd-main"
              src={p.images[img]}
              alt={`${p.name}, view ${img + 1} of ${count}`}
              width="600"
              height="480"
              style={
                zoom
                  ? { transformOrigin: `${zoom.x}% ${zoom.y}%` }
                  : undefined
              }
            />
            {count > 1 && (
              <>
                <button
                  className="pd-arrow pd-prev"
                  aria-label="Previous image"
                  onClick={() => go(-1)}
                >
                  ‹
                </button>
                <button
                  className="pd-arrow pd-next"
                  aria-label="Next image"
                  onClick={() => go(1)}
                >
                  ›
                </button>
                <span className="pd-count small" aria-hidden="true">
                  {img + 1} / {count}
                </span>
              </>
            )}
          </div>
          {count > 1 && (
            <ul className="pd-thumbs">
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
          )}
        </div>

        {/* Summary */}
        <div className="pd-info">
          <p className="pd-brand">
            <span className="muted">Brand:</span> {p.brand}
          </p>
          <h1>{p.name}</h1>
          <p className="pd-summary">{p.summary}</p>

          <div className="pd-priceline">
            {hasPrice ? (
              <p className="price">{ugx(p.price)}</p>
            ) : (
              <p className="price quote">Price on request</p>
            )}
            <p className="small muted">Prices in UGX. Confirmed on order.</p>
          </div>

          {highlights.length > 0 && (
            <>
              <h2 className="h3">About this item</h2>
              <ul className="pd-bullets">
                {highlights.map(([k, v]) => (
                  <li key={k}>
                    <strong>{k}:</strong> {v}
                  </li>
                ))}
              </ul>
            </>
          )}

          <a className="link small" href="#pd-specs">
            See full specifications
          </a>
        </div>

        {/* Buy box */}
        <aside className="pd-buy" aria-label="Purchase options">
          {hasPrice ? (
            <p className="price">{ugx(p.price)}</p>
          ) : (
            <p className="price quote">Price on request</p>
          )}
          <p className="pd-stock">
            <span className="dot" aria-hidden="true" /> Available to order
          </p>

          <div className="pd-qty">
            <span className="small muted" id="qty-label">
              Quantity
            </span>
            <QtyStepper value={qty} onChange={setQty} label={p.name} />
          </div>

          {hasPrice && qty > 1 && (
            <p className="pd-total small">
              Total: <strong>{ugx((p.price ?? 0) * qty)}</strong>
            </p>
          )}
          
          {hasPrice && (
            <button
              className="btn pd-cta"
              onClick={() => {
                add(p.id, qty)
                setAdded(true)
              }}
            >
              Add to cart
            </button>
          )}
          <a
            className="btn btn-sun pd-cta"
            href={orderLink([{ product: p, qty }])}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hasPrice ? "Order on WhatsApp" : "Request a quote"}
          </a>

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

          <ul className="pd-trust small">
            <li>Order and delivery confirmed on WhatsApp</li>
            <li>Sizing and installation advice from our team</li>
            <li>Ask us about bulk and project pricing</li>
          </ul>

          <button className="btn btn-ghost-dark btn-sm pd-share" onClick={share}>
            {copied ? "Link copied" : "Share this product"}
          </button>
        </aside>
      </div>

      {/* Details */}
      <nav className="pd-nav" aria-label="Product sections">
        <a href="#pd-overview">Overview</a>
        <a href="#pd-specs">Specifications</a>
        <a href="#pd-support">Delivery and support</a>
        <a href="#pd-related">Related</a>
      </nav>

      <section id="pd-overview" className="pd-section" aria-labelledby="ov-h">
        <h2 id="ov-h">Product overview</h2>
        <p>{p.description}</p>
      </section>

      <section id="pd-specs" className="pd-section" aria-labelledby="sp-h">
        <h2 id="sp-h">Specifications</h2>
        <dl className="specs">
          {p.specs.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
          <div>
            <dt>Brand</dt>
            <dd>{p.brand}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{p.category}</dd>
          </div>
        </dl>
      </section>

      <section id="pd-support" className="pd-section" aria-labelledby="su-h">
        <h2 id="su-h">Delivery and support</h2>
        <div className="pd-support">
          <div>
            <h3 className="h3">Ordering</h3>
            <p>
              Send your order on WhatsApp. We confirm stock, price and delivery
              with you before you pay.
            </p>
          </div>
          <div>
            <h3 className="h3">Right sizing</h3>
            <p>
              Not sure this fits your load? Tell us what you need to power and
              we will suggest the right setup.
            </p>
          </div>
          <div>
            <h3 className="h3">Installation</h3>
            <p>
              Ask about installation and after-sales help when you place your
              order.
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section
          id="pd-related"
          className="pd-section"
          aria-labelledby="sim"
        >
          <h2 id="sim">You may also need</h2>
          <div className="grid">
            {related.map((s) => (
              <ProductCard key={s.id} p={s} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}