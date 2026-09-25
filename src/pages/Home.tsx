import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import ProductCard from "../components/ProductCard"
import Reveal from "../components/Reveal"
import { BRANDS, SITE } from "../config"
import { CATEGORIES, PRODUCTS } from "../data/products"
import { useSeo } from "../hooks/useSeo"
import { waLink } from "../lib/whatsapp"

const WHY = [
  [
    "Sized to your load",
    "We look at what you actually need to power, then recommend the panels, storage and inverter that fit your requirements."
  ],
  [
    "Installed properly",
    "From mounting and wiring to earthing and commissioning, your system is installed with the details that matter."
  ],
  [
    "Support after installation",
    "When you need help, you have a local team to contact for maintenance, troubleshooting and system upgrades."
  ]
]

const STEPS = [
  [
    "01",
    "Tell us what you need",
    "Share your appliances, electricity bill, existing system or the products you are looking for."
  ],
  [
    "02",
    "We work out the right solution",
    "We assess your requirements and recommend suitable equipment or a complete solar system."
  ],
  [
    "03",
    "We supply and install",
    "Once you are ready, we supply the equipment and can handle installation and commissioning."
  ]
]

export default function Home() {
  useSeo({
    title: "Solar Panels, Batteries & Inverters in Uganda | DC Power",
    description:
      "Shop solar panels, lithium batteries, inverters and solar equipment in Uganda. DC Power also designs, supplies and installs complete solar power systems.",
    path: "/"
  })

  const featured = PRODUCTS.filter((p) => p.featured)
    .concat(PRODUCTS.filter((p) => !p.featured).slice(0, 1))

  return (
    <>
      <Hero />

      <Marquee items={PRODUCTS.map((p) => p.name)} />

      <section className="wrap pad home-intro" aria-labelledby="intro-title">
        <div className="home-intro-copy prose">
          <p className="eyebrow">SOLAR POWER, MADE PRACTICAL</p>

          <h2 id="intro-title">
            The equipment you need. The system to make it work.
          </h2>

          <p className="lead">
            Whether you need a single battery, a new inverter or a complete
            solar installation, DC Power helps you choose the right equipment
            and put it to work.
          </p>
        </div>

        <div className="home-intro-actions">
          <Link className="btn btn-sun" to="/products">
            Shop solar equipment
          </Link>

          <a
            className="btn btn-ghost-dark"
            href={waLink(
              "Hello DC Power, I need help choosing a solar system."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Design my system
          </a>
        </div>
      </section>

      <section className="wrap pad" aria-labelledby="cats">
        <div className="section-head">
          <div>
            <p className="eyebrow">SHOP SOLAR</p>
            <h2 id="cats">Find what you need</h2>
          </div>

          <Link to="/products">View all products</Link>
        </div>

        <div className="cats">
          {CATEGORIES.map((category, i) => {
            const count = PRODUCTS.filter(
              (p) => p.category === category
            ).length

            return (
              <Reveal key={category} delay={i * 60}>
                <Link
                  className={`cat cat-${i}`}
                  to={`/products?cat=${encodeURIComponent(category)}`}
                >
                  <span>{category}</span>
                  <small>
                    {count} {count === 1 ? "product" : "products"}
                  </small>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="band" aria-labelledby="featured-title">
        <div className="wrap pad">
          <div className="section-head">
            <div>
              <p className="eyebrow">PRODUCTS</p>
              <h2 id="featured-title">Popular solar equipment</h2>
            </div>

            <Link to="/products">See all products</Link>
          </div>

          <div className="grid">
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={i * 80}>
                <ProductCard p={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap pad why" aria-labelledby="why-title">
        <div className="prose">
          <p className="eyebrow">WHY DC POWER</p>

          <h2 id="why-title">
            Solar should be designed around how you use power.
          </h2>

          <p>
            Buying the right equipment is only part of the job. A useful solar
            system starts with understanding what you need to run, how long
            you need to run it and what you want the system to achieve.
          </p>
        </div>

        <div className="why-grid">
          {WHY.map(([title, description], i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="why-item">
                <span className="why-number">
                  0{i + 1}
                </span>

                <h3>{title}</h3>

                <p className="muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band home-process" aria-labelledby="process-title">
        <div className="wrap pad">
          <div className="prose">
            <p className="eyebrow">HOW IT WORKS</p>

            <h2 id="process-title">
              From your power needs to a working system.
            </h2>

            <p>
              We keep the process straightforward, whether you are buying
              equipment or planning a complete solar installation.
            </p>
          </div>

          <div className="home-process-grid">
            {STEPS.map(([number, title, description], i) => (
              <Reveal key={number} delay={i * 100}>
                <div className="home-process-item">
                  <span className="home-process-number">{number}</span>

                  <h3>{title}</h3>

                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="brands-title" className="brands">
        <div className="wrap">
          <p className="eyebrow">EQUIPMENT</p>

          <h2 id="brands-title">
            Brands we supply
          </h2>
        </div>

        <Marquee items={BRANDS} tone="small" reverse />
      </section>

      <section className="wrap pad home-cta-section">
        <div className="cta">
          <p className="eyebrow">NEED HELP CHOOSING?</p>

          <h2>
            Tell us what you want to power.
          </h2>

          <p>
            Send us your electricity bill, a list of appliances or simply
            describe what you need. We can help you work out the equipment
            or system that makes sense for your requirements.
          </p>

          <div className="cta-actions">
            <a
              className="btn btn-sun"
              href={waLink(
                "Hello DC Power, I need help sizing a solar system."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>

            <Link className="btn" to="/contact">
              Contact us
            </Link>
          </div>

          <p className="small">
            Or call{" "}
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
              {SITE.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
