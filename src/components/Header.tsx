import { useEffect, useId, useState, type FormEvent } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { search } from '../data/products';

export default function Header() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const { count } = useCart();
  const nav = useNavigate();
  const lid = useId();
  const hits = q.trim() ? search(q).slice(0, 5) : [];

  useEffect(() => { const f = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', f); return () => window.removeEventListener('keydown', f); }, []);

  const go = (e: FormEvent) => { e.preventDefault(); setOpen(false); nav(`/products?q=${encodeURIComponent(q.trim())}`); };
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link to="/" className="logo" aria-label="DC Solar Uganda home"><span className="logo-sun" aria-hidden="true" />DC Solar</Link>
        <button className="menu-btn" aria-expanded={menu} aria-controls="nav" onClick={() => setMenu(!menu)}>Menu</button>
        <nav id="nav" className={menu ? 'open' : ''} aria-label="Main" onClick={() => setMenu(false)}>
          <NavLink to="/products">Products</NavLink><NavLink to="/about">About</NavLink><NavLink to="/contact">Contact</NavLink>
        </nav>
        <form className="search" role="search" onSubmit={go}>
          <label htmlFor="q" className="sr">Search products</label>
          <input id="q" type="search" placeholder="Search panels, batteries, inverters" value={q} autoComplete="off"
            onChange={(e) => { setQ(e.target.value); setOpen(true); }} onFocus={() => setOpen(true)} aria-controls={lid} aria-expanded={open && hits.length > 0} />
          {open && hits.length > 0 && (
            <ul id={lid} className="suggest">
              {hits.map((p) => <li key={p.id}><Link to={`/products/${p.slug}`} onClick={() => { setOpen(false); setQ(''); }}>{p.name}<span className="muted small"> {p.brand}</span></Link></li>)}
            </ul>
          )}
        </form>
        <Link to="/cart" className="cart-link" aria-label={`Cart, ${count} items`}>Cart<span className="badge" aria-hidden="true">{count}</span></Link>
      </div>
    </header>
  );
}
