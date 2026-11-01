import { useEffect, useId, useState, type FormEvent } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { search } from "../lib/helpers"

export default function Header() {
  const [q, setQ] = useState("")
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const { count } = useCart()
  const nav = useNavigate()
  const { pathname } = useLocation()
  const lid = useId()
  const hits = q.trim() ? search(q).slice(0, 5) : []

  useEffect(() => {
    const f = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        setMenu(false)
      }
    }

    window.addEventListener("keydown", f)

    return () => window.removeEventListener("keydown", f)
  }, [])

  useEffect(() => setMenu(false), [pathname])

  const go = (e: FormEvent) => {
    e.preventDefault()
    setOpen(false)
    nav(`/products?q=${encodeURIComponent(q.trim())}`)
  }

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link to="/" className="logo" aria-label="DC Power Uganda home">
          <img
            src="/images/logo.jpeg"
            alt="DC Power"
            className="logo-img"
          />
        </Link>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={menu}
          aria-controls="nav"
          onClick={() => setMenu(!menu)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={menu ? "M5 5l14 14M19 5 5 19" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          <span>{menu ? "Close" : "Menu"}</span>
        </button>

        <nav
          id="nav"
          className={menu ? "open" : ""}
          aria-label="Main"
          onClick={() => setMenu(false)}
        >
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <form className="search" role="search" onSubmit={go} onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false)
        }}>
          <label htmlFor="q" className="sr">
            Search products
          </label>

          <svg className="search-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.8" /><path d="m16 16 4.3 4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>

          <input
            id="q"
            type="search"
            placeholder="Search panels, batteries, inverters"
            value={q}
            autoComplete="off"
            onChange={(e) => {
              setQ(e.target.value)
              setOpen(true)
            }}
            onFocus={() => setOpen(true)}
            aria-controls={lid}
            aria-expanded={open && hits.length > 0}
          />

          {open && hits.length > 0 && (
            <ul id={lid} className="suggest">
              {hits.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/products/${p.slug}`}
                    onClick={() => {
                      setOpen(false)
                      setQ("")
                    }}
                  >
                    {p.name}
                    <span className="muted small"> {p.brand}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </form>

        <Link
          to="/cart"
          className="cart-link"
          aria-label={`Cart, ${count} items`}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 2-1.6L21 8H6M10 20h.01M18 20h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span>Cart</span>
          <span className="badge" aria-hidden="true">
            {count}
          </span>
        </Link>
      </div>
    </header>
  )
}
