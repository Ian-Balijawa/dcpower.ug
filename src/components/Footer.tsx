import { Link } from "react-router-dom"
import { SITE } from "../config"

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <div>
          <Link
            to="/"
            className="logo footer-logo"
            aria-label="DC Power Uganda home"
          >
            <img
              src="/images/logo.jpeg"
              alt="DC Power"
              className="logo-img"
            />
          </Link>

          <p className="small">
            Solar systems supplied and installed across Uganda.
          </p>
        </div>

        <nav aria-label="Footer">
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </nav>

        <address className="small">
          {SITE.address}
          <br />
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
            {SITE.phone}
          </a>
          <br />
          <a href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <br />
          {SITE.hours}
        </address>
      </div>

      <p className="wrap small ftr-end">
        &copy; {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  )
}
