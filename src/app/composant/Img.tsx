import React from 'react';
import styles from './Card.module.css';

type ImgProps = {
  images: { src: string; alt: string; hoverText: string }[];
};

const Img: React.FC<ImgProps> = ({ images }) => {
  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img src={image.src} alt={image.alt} className={styles.logo} />
          <span className={styles.hoverText}>{image.hoverText}</span>
        </div>
      ))}
    </div>
  );
};

export default Img;