import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import { brandsOf, CATEGORIES, PRODUCTS, search } from '../data/products';
import { useSeo } from '../hooks/useSeo';
export default function Products() {
  const [sp, setSp] = useSearchParams();
  const q = sp.get('q') ?? '', cat = sp.get('cat') ?? '', brand = sp.get('brand') ?? '', sort = sp.get('sort') ?? 'featured', max = Number(sp.get('max') ?? 0);
  useSeo({ title: cat || 'All solar products', description: `Browse ${cat || 'solar panels, batteries, inverters and complete systems'} available in Uganda.`, path: '/products' });
  const upd = (k: string, v: string) => { const n = new URLSearchParams(sp); v ? n.set(k, v) : n.delete(k); setSp(n, { replace: true }); };
  let list = search(q).filter((p) => (!cat || p.category === cat) && (!brand || p.brand === brand) && (!max || (p.price ?? Infinity) <= max));
  list = [...list].sort((a, b) => sort === 'low' ? (a.price ?? 1e12) - (b.price ?? 1e12) : sort === 'high' ? (b.price ?? 0) - (a.price ?? 0) : Number(!!b.featured) - Number(!!a.featured));
  return (
    <div className="wrap pad">
      <h1>{q ? `Results for "${q}"` : cat || 'All products'}</h1>
      <div className="shop">
        <form className="filters" aria-label="Filters" onSubmit={(e) => e.preventDefault()}>
          <label>Search<input type="search" value={q} onChange={(e) => upd('q', e.target.value)} /></label>
          <label>Category<select value={cat} onChange={(e) => upd('cat', e.target.value)}><option value="">All categories</option>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select></label>
          <label>Brand<select value={brand} onChange={(e) => upd('brand', e.target.value)}><option value="">All brands</option>{brandsOf().map((b) => <option key={b}>{b}</option>)}</select></label>
          <label>Max price<select value={max || ''} onChange={(e) => upd('max', e.target.value)}><option value="">Any price</option>{[1000000, 5000000, 15000000].map((n) => <option key={n} value={n}>Up to UGX {n.toLocaleString('en-UG')}</option>)}</select></label>
          <label>Sort by<select value={sort} onChange={(e) => upd('sort', e.target.value)}><option value="featured">Popular</option><option value="low">Price, low to high</option><option value="high">Price, high to low</option></select></label>
          <button type="button" className="btn btn-ghost-dark" onClick={() => setSp({})}>Clear filters</button>
        </form>
        <div>
          <p className="muted" role="status">{list.length} of {PRODUCTS.length} products</p>
          {list.length ? <div className="grid">{list.map((p, i) => <Reveal key={p.id} delay={(i % 3) * 70}><ProductCard p={p} /></Reveal>)}</div>
            : <p>No products match. Try removing a filter, or ask us on WhatsApp if we can source it.</p>}
        </div>
      </div>
    </div>
  );
}
