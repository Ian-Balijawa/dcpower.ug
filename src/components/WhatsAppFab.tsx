import { waLink } from "../lib/whatsapp"
export default function WhatsAppFab() {
  return (
    <a
      className="fab"
      href={waLink("Hello DC Power, I need help choosing a solar system.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DC Power on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.3.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z"
        />
      </svg>
      <span>Chat with us</span>
    </a>
  )
}
