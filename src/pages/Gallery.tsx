import { useCallback, useState } from "react"
import ImageDetail from "../components/ImageDetail"
import { GALLERY_IMAGES } from "../data/gallery"
import { useSeo } from "../hooks/useSeo"
import "../styles/gallery.css"

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const closeDetail = useCallback(() => setActiveIndex(null), [])
  const changeImage = useCallback((index: number) => setActiveIndex(index), [])

  useSeo({
    title: "Project Gallery",
    description:
      "Explore DC Power's solar installations, equipment and project photos from across Uganda.",
    path: "/gallery",
  })

  return (
    <div className="gallery-page">
      <div className="wrap pad">
        <header className="gallery-heading">
          <p className="eyebrow">OUR WORK</p>
          <h1>DC Power in action</h1>
          <p>
            A look at the people, products and solar projects that keep homes
            and businesses powered.
          </p>
          <span className="gallery-total">{GALLERY_IMAGES.length} photos</span>
        </header>

        <section className="gallery-masonry" aria-label="DC Power photo gallery">
          {GALLERY_IMAGES.map((src, index) => (
            <button
              key={src}
              type="button"
              className="gallery-tile"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open gallery image ${index + 1} of ${GALLERY_IMAGES.length}`}
            >
              <img
                src={src}
                alt={`DC Power gallery image ${index + 1}`}
                loading={index < 8 ? "eager" : "lazy"}
                decoding="async"
              />
              <span className="gallery-tile-action" aria-hidden="true">
                View photo <span>↗</span>
              </span>
            </button>
          ))}
        </section>
      </div>

      {activeIndex !== null && (
        <ImageDetail
          images={GALLERY_IMAGES}
          index={activeIndex}
          onChange={changeImage}
          onClose={closeDetail}
        />
      )}
    </div>
  )
}
