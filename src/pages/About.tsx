import Marquee from '../components/Marquee';
import { BRANDS } from '../config';
import { useSeo } from '../hooks/useSeo';
export default function About() {
  useSeo({ title: 'About DC Solar', description: 'DC Solar supplies and installs solar panels, batteries and inverters across Uganda.', path: '/about' });
  return (
    <>
      <div className="wrap pad prose">
        <h1>Reliable power, installed by people you can visit</h1>
        <p>DC Solar supplies and installs solar systems for homes, shops, schools and factories across Uganda. We started with a simple aim: power that does not depend on the grid or on a diesel delivery.</p>
        <p>We stock panels, batteries and inverters from established manufacturers, and pair them with our own installation team. Every system is sized to the customer's real load, and every install comes with a written warranty.</p>
        <h2>What we offer</h2>
        <ul><li>Free load assessment and quotation</li><li>Supply of genuine products with manufacturer warranty</li><li>Installation, commissioning and training</li><li>Maintenance plans and remote monitoring</li></ul>
        <p className="muted small">Replace this copy with the client's real story, team and certifications.</p>
      </div>
      <section aria-labelledby="sup" className="brands"><h2 id="sup" className="wrap">Our suppliers</h2><Marquee items={BRANDS} tone="small" /></section>
    </>
  );
}
