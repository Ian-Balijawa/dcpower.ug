import { useState, type FormEvent } from "react"
import { SITE } from "../config"
import { useSeo } from "../hooks/useSeo"
import { waLink } from "../lib/whatsapp"
export default function Contact() {
  useSeo({
    title: "Contact us",
    description: "Talk to DC Solar about a quote, installation or support.",
    path: "/contact"
  })
  const [err, setErr] = useState("")
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get("name")).trim(),
      phone = String(f.get("phone")).trim(),
      msg = String(f.get("message")).trim()
    if (!name || !phone || !msg)
      return setErr("Please fill in your name, phone number and message.")
    setErr("")
    window.open(waLink(`Hello DC Solar, I am ${name} (${phone}).\n${msg}`), "_blank", "noopener")
  }
  return (
    <div className="wrap pad two">
      <div>
        <h1>Talk to us</h1>
        <p>Tell us what you want to power and we will reply with options and prices.</p>
        <address className="prose">
          {SITE.address}
          <br />
          Phone <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
          <br />
          Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <br />
          {SITE.hours}
        </address>
      </div>
      <form onSubmit={submit} noValidate className="form">
        <label>
          Your name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          What do you need?
          <textarea name="message" rows={5} required />
        </label>
        {err && (
          <p role="alert" className="err">
            {err}
          </p>
        )}
        <button className="btn" type="submit">
          Send on WhatsApp
        </button>
      </form>
    </div>
  )
}
