import React, { useState } from 'react';
// import './ImageCarousel.css'; // Import the CSS for styling

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={goToPrevious}>‹</button>
      <div className="carousel-image-container">
        <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="carousel-image" />
      </div>
      <button className="carousel-button right" onClick={goToNext}>›</button>
      
      <div className="thumbnail-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;