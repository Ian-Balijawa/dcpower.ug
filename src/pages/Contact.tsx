import { useState, type FormEvent } from "react"
import { SITE } from "../config"
import { useSeo } from "../hooks/useSeo"
import { waLink } from "../lib/whatsapp"

export default function Contact() {
  useSeo({
    title: "Contact DC Power | Solar Quotes & Support in Uganda",
    description:
      "Contact DC Power for solar product enquiries, system quotations, installation and support in Uganda.",
    path: "/contact"
  })

  const [err, setErr] = useState("")

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const f = new FormData(e.currentTarget)
    const name = String(f.get("name") ?? "").trim()
    const phone = String(f.get("phone") ?? "").trim()
    const message = String(f.get("message") ?? "").trim()

    if (!name || !phone || !message) {
      setErr("Please fill in your name, phone number and message.")
      return
    }

    setErr("")

    window.open(
      waLink(
        `Hello DC Power,\n\nMy name is ${name} and my phone number is ${phone}.\n\n${message}`
      ),
      "_blank",
      "noopener"
    )
  }

  return (
    <main>
      <section className="wrap pad contact-hero">
        <div className="prose">
          <p className="eyebrow">GET IN TOUCH</p>

          <h1>Let's talk about your power needs.</h1>

          <p className="lead">
            Looking for a solar system, a specific product, an installation
            or support with an existing system? Tell us what you need and
            we'll help you work out the next step.
          </p>
        </div>
      </section>

      <section className="wrap contact-layout">
        <div className="contact-info">
          <div className="contact-card">
            <p className="eyebrow">CONTACT DC POWER</p>

            <h2>We're here to help.</h2>

            <p>
              Give us a call, send an email, or use the form to start a
              conversation on WhatsApp.
            </p>

            <address>
              <div className="contact-detail">
                <span className="contact-label">Location</span>
                <span>{SITE.address}</span>
              </div>

              <div className="contact-detail">
                <span className="contact-label">Phone</span>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                  {SITE.phone}
                </a>
              </div>

              <div className="contact-detail">
                <span className="contact-label">Email</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>

              <div className="contact-detail">
                <span className="contact-label">Hours</span>
                <span>{SITE.hours}</span>
              </div>
            </address>
          </div>

          <div className="contact-note">
            <h3>What can you contact us about?</h3>

            <ul>
              <li>Solar system quotations</li>
              <li>Solar panels, batteries and inverters</li>
              <li>Installation and commissioning</li>
              <li>Maintenance and technical support</li>
              <li>System upgrades and power requirements</li>
            </ul>
          </div>
        </div>

        <div className="contact-form-wrap">
          <div className="contact-form-head">
            <p className="eyebrow">START A CONVERSATION</p>
            <h2>Tell us what you need.</h2>
            <p>
              The more information you provide, the easier it is for us to
              understand your requirements.
            </p>
          </div>

          <form onSubmit={submit} noValidate className="form contact-form">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                placeholder="e.g. John Doe"
                required
              />
            </label>

            <label>
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="e.g. 0772 123 456"
                required
              />
            </label>

            <label>
              What do you need?
              <textarea
                name="message"
                rows={7}
                placeholder="Tell us about the property, your power needs, the equipment you are looking for, or the support you need."
                required
              />
            </label>

            {err && (
              <p role="alert" className="err">
                {err}
              </p>
            )}

            <button className="btn btn-sun contact-submit" type="submit">
              Continue on WhatsApp
            </button>

            <p className="muted small">
              Your message will open in WhatsApp so you can review it before
              sending.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}
