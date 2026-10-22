import { useEffect, useRef } from "react"

interface ImageDetailProps {
  images: readonly string[]
  index: number
  onChange: (index: number) => void
  onClose: () => void
}

const fileNameOf = (src: string) =>
  decodeURIComponent(src.split("/").pop() ?? src)

const dateOf = (src: string) => {
  const match = fileNameOf(src).match(/(20\d{2})-(\d{2})-(\d{2})/)
  if (!match) return null

  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
    .toLocaleDateString("en-UG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
}

export default function ImageDetail({
  images,
  index,
  onChange,
  onClose,
}: ImageDetailProps) {
  const dialogRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const image = images[index]

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement as HTMLElement | null
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        onChange((index + 1) % images.length)
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        onChange((index - 1 + images.length) % images.length)
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
      previousFocus?.focus()
    }
  }, [images.length, index, onChange, onClose])

  if (!image) return null

  const fileName = fileNameOf(image)
  const date = dateOf(image)

  return (
    <div
      className="image-detail-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="image-detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="image-detail-title"
        ref={dialogRef}
      >
        <header className="image-detail-header">
          <div>
            <p className="eyebrow">DC POWER GALLERY</p>
            <h2 id="image-detail-title">Image {index + 1} of {images.length}</h2>
          </div>
          <button
            ref={closeRef}
            className="image-detail-close"
            type="button"
            onClick={onClose}
            aria-label="Close image details"
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="image-detail-viewer">
          <button
            type="button"
            className="image-detail-nav image-detail-prev"
            onClick={() => onChange((index - 1 + images.length) % images.length)}
            aria-label="View previous image"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <img src={image} alt={`DC Power gallery image ${index + 1}`} />
          <button
            type="button"
            className="image-detail-nav image-detail-next"
            onClick={() => onChange((index + 1) % images.length)}
            aria-label="View next image"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <footer className="image-detail-meta">
          <div>
            <strong>{fileName}</strong>
            {date && <span>Added {date}</span>}
          </div>
          <p>Use the arrows or ← → keys to browse</p>
        </footer>
      </section>
    </div>
  )
}
