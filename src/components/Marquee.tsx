export default function Marquee({
  items,
  tone = "big",
  reverse = false
}: {
  items: string[]
  tone?: "big" | "small"
  reverse?: boolean
}) {
  return (
    <div className={`mq mq-${tone}`} aria-label="Scrolling list" role="group">
      <ul className="mq-track" style={{ animationDirection: reverse ? "reverse" : "normal" }}>
        {[...items, ...items].map((t, i) => (
          <li key={i} aria-hidden={i >= items.length}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
