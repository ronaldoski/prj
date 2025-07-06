import React from "react";

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  hoverText?: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt, className = "", hoverText }) => (
  <div className={`relative group ${className}`}>
    <img
      src={src}
      alt={alt}
      className="rounded-xl object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
    />
    {hoverText && (
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-opacity duration-300">
        <span className="text-white text-center px-2">{hoverText}</span>
      </div>
    )}
  </div>
);

export default CardImage;