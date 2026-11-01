import { useEffect, useRef } from "react"

interface ImageDetailProps {
  images: readonly string[]
  index: number
  onChange: (index: number) => void
  onClose: () => void
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

    return () => {
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])

  useEffect(() => {
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
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [images.length, index, onChange, onClose])

  if (!image) return null

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
            <h2 id="image-detail-title">Photo {index + 1} of {images.length}</h2>
          </div>
          <button
            ref={closeRef}
            className="image-detail-close"
            type="button"
            onClick={onClose}
            aria-label="Close image details"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </header>

        <div className="image-detail-viewer">
          <button
            type="button"
            className="image-detail-nav image-detail-prev"
            onClick={() => onChange((index - 1 + images.length) % images.length)}
            aria-label="View previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m14.5 5-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <img src={image} alt={`DC Power gallery image ${index + 1}`} />
          <button
            type="button"
            className="image-detail-nav image-detail-next"
            onClick={() => onChange((index + 1) % images.length)}
            aria-label="View next image"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9.5 5 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>

        <footer className="image-detail-meta">
          <div>
            <strong>DC Power project gallery</strong>
            <span>Photo {index + 1} of {images.length}</span>
          </div>
          <p>Use the arrows or ← → keys to browse</p>
        </footer>
      </section>
    </div>
  )
}
