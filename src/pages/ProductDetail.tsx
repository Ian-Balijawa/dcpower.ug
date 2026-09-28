import { useEffect, useState, type PointerEvent } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import QtyStepper from "../components/QtyStepper"
import { useCart } from "../context/CartContext"
import { bySlug, similar } from "../data/products"
import { useSeo } from "../hooks/useSeo"
import { ugx } from "../lib/format"
import { orderLink } from "../lib/whatsapp"

type Point = {
  x: number
  y: number
}

export default function ProductDetail() {
  const { slug = "" } = useParams()
  const p = bySlug(slug)

  const [img, setImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [zoom, setZoom] = useState<Point | null>(null)
  const [copied, setCopied] = useState(false)

  const { add, getQty } = useCart()
  const nav = useNavigate()

  const orderCount = p ? getQty(p.slug) : 0

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
    path: `/ products / ${slug} `,
    jsonLd: p && {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name,
      sku: p.sku,
      brand: {
        "@type": "Brand",
        name: p.brand,
      },
      category: p.category,
      description: p.description,
      image: p.images.length ? p.images : undefined,
      offers: p.price
        ? {
          "@type": "Offer",
          priceCurrency: "UGX",
          price: p.price,
          ...(p.oldPrice
            ? {
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "UGX",
                price: p.oldPrice,
              },
            }
            : {}),
          availability:
            p.stock?.status === "out_of_stock"
              ? "https://schema.org/OutOfStock"
              : "https://schema.org/InStock",
        }
        : undefined,
    },
  })

  if (!p) {
    return (
      <div className="wrap pad">
        <h1>Product not found</h1>
        <Link to="/products">Back to products</Link>
      </div>
    )
  }

  const hasPrice = p.price !== null
  const hasImages = p.images.length > 0
  const count = p.images.length

  const highlights = p.specs.slice(0, 4)
  const related = similar(p)

  const discount =
    p.price !== null && p.oldPrice && p.oldPrice > p.price
      ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)
      : 0

  const stockStatus = p.stock?.status ?? "in_stock"

  const stockLabel =
    stockStatus === "in_stock"
      ? "In stock"
      : stockStatus === "out_of_stock"
        ? "Out of stock"
        : "Available for pre-order"

  const go = (step: number) => {
    if (!count) return

    setImg((i) => (i + step + count) % count)
  }

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return

    const r = e.currentTarget.getBoundingClientRect()

    setZoom({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    })
  }

  const share = async () => {
    const url = window.location.href

    try {
      if (navigator.share) {
        await navigator.share({
          title: p.name,
          url,
        })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)

        window.setTimeout(() => {
          setCopied(false)
        }, 2000)
      }
    } catch {
      // User cancelled sharing or clipboard access was blocked.
    }
  }

  const canPurchase = hasPrice && stockStatus !== "out_of_stock"

  return (
    <div className="wrap pad">
      <nav className="crumbs small" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link
              to={`/ products ? cat = ${encodeURIComponent(p.category)} `}
            >
              {p.category}
            </Link>
          </li>

          <li aria-current="page">{p.name}</li>
        </ol>
      </nav>

      <div className="pd">
        {/* Gallery */}
        <div className="pd-gallery">
          {hasImages ? (
            <>
              <div
                className={`pd - stage${zoom ? " is-zoomed" : ""} `}
                onPointerMove={onMove}
                onPointerLeave={() => setZoom(null)}
              >
                <img
                  className="pd-main"
                  src={p.images[img]}
                  alt={`${p.name}, view ${img + 1} of ${count} `}
                  width="600"
                  height="480"
                  style={
                    zoom
                      ? {
                        transformOrigin: `${zoom.x}% ${zoom.y}% `,
                      }
                      : undefined
                  }
                />

                {count > 1 && (
                  <>
                    <button
                      type="button"
                      className="pd-arrow pd-prev"
                      aria-label="Previous image"
                      onClick={() => go(-1)}
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      className="pd-arrow pd-next"
                      aria-label="Next image"
                      onClick={() => go(1)}
                    >
                      ›
                    </button>

                    <span
                      className="pd-count small"
                      aria-hidden="true"
                    >
                      {img + 1} / {count}
                    </span>
                  </>
                )}
              </div>

              {count > 1 && (
                <ul className="pd-thumbs">
                  {p.images.map((src, i) => (
                    <li key={src}>
                      <button
                        type="button"
                        aria-label={`Show image ${i + 1} `}
                        aria-pressed={i === img}
                        onClick={() => setImg(i)}
                      >
                        <img
                          src={src}
                          alt=""
                          width="80"
                          height="64"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <div
              className="pd-stage pd-stage--empty"
              aria-label="Product image unavailable"
            >
              <span className="muted">Product image coming soon</span>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="pd-info">
          <p className="pd-brand">
            <span className="muted">Brand:</span> {p.brand}
          </p>

          <h1>{p.name}</h1>

          <p className="pd-summary">{p.summary}</p>

          {p.sku && (
            <p className="small muted">
              SKU: <strong>{p.sku}</strong>
            </p>
          )}

          {/* Price */}
          <div className="pd-priceline">
            {hasPrice ? (
              <div>
                <p className="price">
                  {ugx(p.price!)}
                </p>

                {p.oldPrice && p.oldPrice > p.price! && (
                  <div className="pd-price-meta">
                    <del className="muted">
                      {ugx(p.oldPrice)}
                    </del>

                    {discount > 0 && (
                      <span className="pd-discount">
                        Save {ugx(p.oldPrice - p.price!)} ({discount}%)
                      </span>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <p className="price quote">Price on request</p>
            )}

            <p className="small muted">
              Prices in UGX. Confirmed on order.
            </p>
          </div>

          {/* Highlights */}
          {highlights.length > 0 && (
            <>
              <h2 className="h3">About this item</h2>

              <ul className="pd-bullets">
                {highlights.map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
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
        <aside
          className="pd-buy"
          aria-label="Purchase options"
        >
          {hasPrice ? (
            <>
              <p className="price">{ugx(p.price!)}</p>

              {p.oldPrice && p.oldPrice > p.price! && (
                <p className="small muted">
                  Was <del>{ugx(p.oldPrice)}</del>
                </p>
              )}
            </>
          ) : (
            <p className="price quote">Price on request</p>
          )}

          <p className="pd-stock">
            <span
              className={`dot ${stockStatus === "out_of_stock"
                  ? "dot--out"
                  : ""
                } `}
              aria-hidden="true"
            />

            {stockLabel}
          </p>

          {p.stock?.quantity !== undefined && (
            <p className="small muted">
              {p.stock.quantity} units available
            </p>
          )}

          {canPurchase && (
            <div className="pd-qty">
              <span className="small muted" id="qty-label">
                Quantity
              </span>

              <QtyStepper
                value={qty}
                onChange={setQty}
                label={p.name}
              />
            </div>
          )}

          {hasPrice && qty > 1 && (
            <p className="pd-total small">
              Total:{" "}
              <strong>
                {ugx((p.price ?? 0) * qty)}
              </strong>
            </p>
          )}

          {canPurchase && (
            <button
              type="button"
              className="btn pd-cta"
              onClick={() => {
                add(p.id, qty)
                setAdded(true)
              }}
            >
              Add to cart ({orderCount})
            </button>
          )}

          <a
            className="btn btn-sun pd-cta"
            href={orderLink([{ product: p, qty }])}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hasPrice
              ? stockStatus === "out_of_stock"
                ? "Check availability"
                : "Order on WhatsApp"
              : "Request a quote"}
          </a>

          <p role="status" className="small ok">
            {added && (
              <>
                Added {qty} to cart.{" "}
                <button
                  type="button"
                  className="link"
                  onClick={() => nav("/cart")}
                >
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

          {p.warranty && (
            <div className="pd-trust-box">
              <strong>Warranty</strong>
              <span>{p.warranty}</span>
            </div>
          )}

          {p.support && (
            <div className="pd-trust-box">
              <strong>After-sales support</strong>
              <span>{p.support}</span>
            </div>
          )}

          <button
            type="button"
            className="btn btn-ghost-dark btn-sm pd-share"
            onClick={share}
          >
            {copied ? "Link copied" : "Share this product"}
          </button>
        </aside>
      </div>

      {/* Product navigation */}
      <nav
        className="pd-nav"
        aria-label="Product sections"
      >
        <a href="#pd-overview">Overview</a>

        {p.features?.length ? (
          <a href="#pd-features">Features</a>
        ) : null}

        <a href="#pd-specs">Specifications</a>

        {p.applications?.length ? (
          <a href="#pd-applications">Applications</a>
        ) : null}

        {p.installation?.length ? (
          <a href="#pd-installation">Installation</a>
        ) : null}

        <a href="#pd-support">Delivery and support</a>

        {related.length > 0 && (
          <a href="#pd-related">Related</a>
        )}
      </nav>

      {/* Overview */}
      <section
        id="pd-overview"
        className="pd-section"
        aria-labelledby="ov-h"
      >
        <h2 id="ov-h">Product overview</h2>

        <p>{p.description}</p>
      </section>

      {/* Features */}
      {p.features && p.features.length > 0 && (
        <section
          id="pd-features"
          className="pd-section"
          aria-labelledby="feature-h"
        >
          <h2 id="feature-h">Key features</h2>

          <ul className="pd-bullets">
            {p.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Specifications */}
      <section
        id="pd-specs"
        className="pd-section"
        aria-labelledby="sp-h"
      >
        <h2 id="sp-h">Specifications</h2>

        <dl className="specs">
          {p.specs.map(([key, value]) => (
            <div key={key}>
              <dt>{key}</dt>
              <dd>{value}</dd>
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

          {p.sku && (
            <div>
              <dt>SKU</dt>
              <dd>{p.sku}</dd>
            </div>
          )}
        </dl>
      </section>

      {/* Applications */}
      {p.applications && p.applications.length > 0 && (
        <section
          id="pd-applications"
          className="pd-section"
          aria-labelledby="application-h"
        >
          <h2 id="application-h">Suitable applications</h2>

          <ul className="pd-bullets">
            {p.applications.map((application) => (
              <li key={application}>{application}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Installation */}
      {p.installation && p.installation.length > 0 && (
        <section
          id="pd-installation"
          className="pd-section"
          aria-labelledby="installation-h"
        >
          <h2 id="installation-h">Installation</h2>

          <ul className="pd-bullets">
            {p.installation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Delivery and support */}
      <section
        id="pd-support"
        className="pd-section"
        aria-labelledby="su-h"
      >
        <h2 id="su-h">Delivery and support</h2>

        <div className="pd-support">
          <div>
            <h3 className="h3">Ordering</h3>

            <p>
              Send your order on WhatsApp. We confirm stock,
              price and delivery with you before you pay.
            </p>
          </div>

          <div>
            <h3 className="h3">Right sizing</h3>

            <p>
              Not sure this fits your load? Tell us what you
              need to power and we will suggest the right
              setup.
            </p>
          </div>

          <div>
            <h3 className="h3">Installation</h3>

            <p>
              Ask about installation and after-sales help
              when you place your order.
            </p>
          </div>

          {p.warranty && (
            <div>
              <h3 className="h3">Warranty</h3>
              <p>{p.warranty}</p>
            </div>
          )}

          {p.support && (
            <div>
              <h3 className="h3">After-sales support</h3>
              <p>{p.support}</p>
            </div>
          )}
        </div>

        {/* Payment options */}
        {p.paymentOptions &&
          p.paymentOptions.length > 0 && (
            <div className="pd-payments">
              <h3 className="h3">
                Flexible payment options
              </h3>

              <div className="grid">
                {p.paymentOptions.map((option) => (
                  <article
                    key={option.name}
                    className="pd-payment"
                  >
                    <h4>{option.name}</h4>

                    {option.amountPerPayment && (
                      <p className="price">
                        {ugx(option.amountPerPayment)}
                        {option.payments
                          ? " each"
                          : ""}
                      </p>
                    )}

                    <p>{option.description}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section
          id="pd-related"
          className="pd-section"
          aria-labelledby="sim"
        >
          <h2 id="sim">You may also need</h2>

          <div className="grid">
            {related.map((product) => (
              <ProductCard
                key={product.id}
                p={product}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
