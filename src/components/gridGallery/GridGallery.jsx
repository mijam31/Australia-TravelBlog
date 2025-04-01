import React, { useState } from "react";
import styles from "./GridGallery.module.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const GridGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState("");

  const images = [
    "src/assets/pictures/dag 0-7/hygge_2.jpg",
    "src/assets/pictures/dag 0-7/hunters hill 1.JPG",
    "src/assets/pictures/dag 0-7/manly_5.jpg",
    "src/assets/pictures/dag 0-7/taco_3.jpg",
    "src/assets/pictures/dag 7-14/blue2_11.jpg",
    "src/assets/pictures/dag 7-14/gåtur 8 figure 8.JPG",
    "src/assets/pictures/dag 7-14/gåtur figure 8.JPG",
    "src/assets/pictures/dag 7-14/kyst_13.jpg",
    "src/assets/pictures/dag 7-14/kangoroo_7.jpg",
    "src/assets/pictures/dag 7-14/8_figure_8.jpg",
    "src/assets/pictures/Blue_11.jpg",
    "src/assets/pictures/IMG_1825.jpg",
    "src/assets/pictures/IMG_5802.jpg",
    "src/assets/pictures/IMG_8069.jpg",
    "src/assets/pictures/IMG_8105.jpg",
  ];

  const openLightbox = (src) => {
    setCurrentImageIndex(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImageIndex("");
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  console.log(images[currentImageIndex]);

  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <div
          key={index}
          className={styles.galleryItem}
          onClick={() => openLightbox(index)}
        >
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            className={styles.galleryImage}
          />
        </div>
      ))}
      {lightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img
            src={images[currentImageIndex]}
            alt="Lightbox"
            className={styles.lightboxImage}
          />

          <button className={styles.prevButton} onClick={showPrevImage}>
            <IoIosArrowBack />
          </button>
          <button className={styles.nextButton} onClick={showNextImage}>
            <IoIosArrowForward />
          </button>
        </div>
      )}
    </div>
  );
};

export default GridGallery;
