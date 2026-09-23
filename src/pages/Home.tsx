import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import { BRANDS, SITE } from '../config';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { useSeo } from '../hooks/useSeo';
import { waLink } from '../lib/whatsapp';
const WHY = [
  ['Sized to your load', 'We measure what you run, then quote only the panels, storage and inverter you need.'],
  ['Installed properly', 'Certified technicians handle mounting, earthing and commissioning. You get a written warranty.'],
  ['Someone to call', 'After-sales support and spare parts stay in Kampala, not overseas.'],
];
export default function Home() {
  useSeo({ title: 'Solar panels, batteries and inverters in Uganda', description: 'Shop solar panels, lithium batteries, inverters and complete systems in Uganda. Installed by DC Solar and ordered through WhatsApp.', path: '/' });
  return (
    <>
      <Hero />
      <Marquee items={PRODUCTS.map((p) => p.name)} />
      <section className="wrap pad" aria-labelledby="cats">
        <h2 id="cats">Shop by what you need</h2>
        <div className="cats">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c} delay={i * 60}><Link className={`cat cat-${i}`} to={`/products?cat=${encodeURIComponent(c)}`}>
              <span>{c}</span><small>{PRODUCTS.filter((p) => p.category === c).length} products</small>
            </Link></Reveal>
          ))}
        </div>
      </section>
      <section className="band" aria-labelledby="feat"><div className="wrap pad">
        <div className="between"><h2 id="feat">Popular right now</h2><Link to="/products">See all products</Link></div>
        <div className="grid">{PRODUCTS.filter((p) => p.featured).concat(PRODUCTS.filter((p) => !p.featured).slice(0, 1)).map((p, i) => <Reveal key={p.id} delay={i * 80}><ProductCard p={p} /></Reveal>)}</div>
      </div></section>
      <section className="wrap pad why" aria-labelledby="why">
        <h2 id="why">Why customers choose DC Solar</h2>
        <div className="why-grid">{WHY.map(([t, d], i) => <Reveal key={t} delay={i * 100}><h3>{t}</h3><p className="muted">{d}</p></Reveal>)}</div>
      </section>
      <section aria-labelledby="brands" className="brands">
        <h2 id="brands" className="wrap">Brands we supply</h2>
        <Marquee items={BRANDS} tone="small" reverse />
      </section>
      <section className="wrap pad"><div className="cta">
        <h2>Not sure what size system you need?</h2>
        <p>Send us your electricity bill or a list of appliances on WhatsApp. We reply with a recommended system and price.</p>
        <a className="btn btn-sun" href={waLink('Hello DC Solar, please help me size a solar system.')} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        <p className="small">Or call {SITE.phone}</p>
      </div></section>
    </>
  );
}
