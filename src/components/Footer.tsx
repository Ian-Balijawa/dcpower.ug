import { Link } from 'react-router-dom';
import { SITE } from '../config';
export default function Footer() {
  return (
    <footer className="ftr"><div className="wrap ftr-in">
      <div><p className="logo"><span className="logo-sun" aria-hidden="true" />DC Solar</p><p className="small">Solar systems supplied and installed across Uganda.</p></div>
      <nav aria-label="Footer"><Link to="/products">Products</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link><Link to="/cart">Cart</Link></nav>
      <address className="small">{SITE.address}<br /><a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />{SITE.hours}</address>
    </div><p className="wrap small ftr-end">&copy; {new Date().getFullYear()} {SITE.name}</p></footer>
  );
}
