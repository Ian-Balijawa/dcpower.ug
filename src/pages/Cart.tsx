import { Link } from 'react-router-dom';
import QtyStepper from '../components/QtyStepper';
import { useCart } from '../context/CartContext';
import { useSeo } from '../hooks/useSeo';
import { ugx } from '../lib/format';
import { orderLink } from '../lib/whatsapp';
export default function Cart() {
  const { lines, total, count, setQty, remove, clear } = useCart();
  useSeo({ title: 'Your cart', description: 'Review your solar products and send your order on WhatsApp.', path: '/cart' });
  if (!lines.length) return <div className="wrap pad"><h1>Your cart is empty</h1><p>Add panels, batteries or a full kit to get started.</p><Link className="btn" to="/products">Browse products</Link></div>;
  return (
    <div className="wrap pad"><h1>Your cart ({count})</h1>
      <ul className="lines">{lines.map(({ product: p, qty }) => (
        <li key={p.id}><img src={p.images[0]} alt="" width="96" height="77" />
          <div><Link to={`/products/${p.slug}`}><strong>{p.name}</strong></Link><p className="muted small">{p.brand} · {ugx(p.price)}</p></div>
          <QtyStepper value={qty} onChange={(n) => setQty(p.id, n)} label={p.name} />
          <button className="link" onClick={() => remove(p.id)} aria-label={`Remove ${p.name}`}>Remove</button></li>))}</ul>
      <div className="sum"><p>Estimated total <strong>{ugx(total)}</strong></p><p className="muted small">Quote-only items are confirmed on WhatsApp. Delivery and installation are quoted separately.</p>
        <div className="row"><a className="btn btn-sun" href={orderLink(lines)} target="_blank" rel="noopener noreferrer">Send order on WhatsApp</a><button className="btn btn-ghost-dark" onClick={clear}>Empty cart</button></div></div>
    </div>
  );
}
