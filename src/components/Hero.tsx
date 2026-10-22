import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { waLink } from "../lib/whatsapp"
export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`)
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`)
    }
    el.addEventListener("pointermove", move)
    return () => el.removeEventListener("pointermove", move)
  }, [])
  return (
    <section className="hero" ref={ref}>
      <div className="wrap hero-in">
        <div className="hero-copy">
          <h1>Your power stays on, whatever the grid does.</h1>
          <p>
            Solar panels, lithium batteries and inverters from trusted brands, sized for your home,
            shop or factory and installed by our Kampala team.
          </p>
          <div className="row">
            <Link className="btn btn-sun" to="/products">
              Shop solar products
            </Link>
            <a
              className="btn btn-ghost"
              href={waLink("Hello DC Power, I would like a free solar quote.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a quote on WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-art">
          <Link className="hero-photo-frame" to="/gallery" aria-label="Explore DC Power project photos">
            <img
              className="hero-photo-main"
              src="/images/gallery/dcpower/PHOTO-2026-10-20-22-42-51.jpg"
              alt="DC Power technicians preparing solar panels for installation"
              fetchPriority="high"
            />
            <img
              className="hero-photo-detail"
              src="/images/gallery/dcpower/PHOTO-2026-10-20-22-43-11.jpg"
              alt=""
              loading="lazy"
            />
            <span className="hero-photo-caption">
              <span>Powering homes and businesses</span>
              <strong>See our project gallery <span aria-hidden="true">↗</span></strong>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
