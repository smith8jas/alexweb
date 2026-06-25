"use client";

import { useEffect, useState } from "react";

type ExperienceGalleryProps = {
  images: string[];
};

export function ExperienceGallery({ images }: ExperienceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeIndex]);

  return (
    <>
      <div className="gallery-grid experience-gallery">
        {images.map((url, index) => (
          <button
            className={`gallery-item ${index === 0 ? "large" : ""}`}
            key={url}
            type="button"
            style={{ backgroundImage: `url("${url}")` }}
            aria-label={`Abrir imagen ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {activeImage ? (
        <div
          className="image-lightbox-overlay"
          role="presentation"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="image-lightbox-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Imagen ampliada"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={activeImage} alt="" />
            <button
              className="modal-close image-lightbox-close"
              type="button"
              onClick={() => setActiveIndex(null)}
            >
              x
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
