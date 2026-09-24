import Marquee from "../components/Marquee"
import { BRANDS } from "../config"
import { useSeo } from "../hooks/useSeo"

export default function About() {
  useSeo({
    title: "About DC Power | Solar Energy Solutions in Uganda",
    description:
      "DC Power supplies, installs and supports reliable solar power systems for homes, businesses, schools and organisations across Uganda.",
    path: "/about"
  })

  return (
    <>
      <section className="wrap pad">
        <div className="prose">
          <p className="eyebrow">ABOUT DC POWER</p>

          <h1>
            Reliable power for the places that keep Uganda moving.
          </h1>

          <p className="lead">
            DC Power is a Ugandan solar energy company helping homes,
            businesses, schools and organisations take control of their
            electricity needs with dependable solar power systems.
          </p>

          <p>
            We supply genuine solar panels, batteries, inverters and
            supporting equipment, then put those products to work through
            proper system design, installation and commissioning.
          </p>

          <p>
            Whether you need backup power for a home, a solar system for
            your business, or a larger installation, we focus on building
            systems around how you actually use electricity — not simply
            selling you equipment.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap pad">
          <div className="two">
            <div>
              <p className="eyebrow">WHY WE EXIST</p>
              <h2>Power should work when you need it.</h2>
            </div>

            <div className="prose">
              <p>
                Unreliable electricity can interrupt business, affect
                productivity and make everyday life unnecessarily difficult.
                Solar gives homes and organisations another way to generate,
                store and manage the power they need.
              </p>

              <p>
                Our goal is straightforward: make dependable solar power
                easier to access, understand and maintain in Uganda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap pad">
        <div className="prose">
          <p className="eyebrow">WHAT WE DO</p>

          <h2>From the first assessment to long after installation.</h2>

          <p>
            A good solar system is more than a collection of panels and
            batteries. We look at your energy requirements, recommend an
            appropriate system and support you through installation and
            commissioning.
          </p>
        </div>

        <div className="why-grid about-services">
          <div>
            <h3>Assess & Design</h3>
            <p>
              We assess your power requirements and design a system around
              your actual loads, usage and goals.
            </p>
          </div>

          <div>
            <h3>Supply & Install</h3>
            <p>
              We supply genuine solar equipment and handle professional
              installation, configuration and commissioning.
            </p>
          </div>

          <div>
            <h3>Support & Maintain</h3>
            <p>
              We remain available after installation for maintenance,
              troubleshooting, upgrades and ongoing support.
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap pad">
          <div className="two">
            <div>
              <p className="eyebrow">OUR PROMISE</p>
              <h2>We sell systems, not just components.</h2>
            </div>

            <div>
              <ul className="about-list">
                <li>
                  Genuine solar equipment from established manufacturers
                </li>
                <li>
                  Systems selected according to real energy requirements
                </li>
                <li>
                  Professional installation and commissioning
                </li>
                <li>
                  Clear quotations and written warranty information
                </li>
                <li>
                  Maintenance, troubleshooting and system upgrades
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap pad">
        <div className="prose">
          <p className="eyebrow">WHO WE SERVE</p>

          <h2>Solar for homes, businesses and organisations.</h2>

          <p>
            We work with homeowners, shops, offices, schools, farms,
            factories and other organisations looking for reliable power,
            backup electricity or a way to reduce their dependence on the
            grid.
          </p>

          <p>
            Our work is focused on practical systems that can be understood,
            maintained and expanded as your energy needs change.
          </p>
        </div>
      </section>

      <section aria-labelledby="sup" className="brands">
        <h2 id="sup" className="wrap">
          Equipment from established brands
        </h2>

        <Marquee items={BRANDS} tone="small" />
      </section>
    </>
  )
}