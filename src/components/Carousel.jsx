import React, { useState } from 'react';

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Logic to move to the next image
    const nextImage = () => {
        // setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
        const newIndex = currentIndex + 1;
        if (newIndex < pictures.length) {
            setCurrentIndex(newIndex);
        }
        else {
            setCurrentIndex(0);
        }
    };

    // Logic to move to the previous image
    const prevImage = () => {
        // setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
        const newIndex = currentIndex - 1;
        if (newIndex >= 0) {
            setCurrentIndex(newIndex);
        }
        else {
            setCurrentIndex(pictures.length - 1);
        }
    };

    return (
        <div className="carousel-container">
            <img src={pictures[currentIndex]} alt="Carousel" className="carousel-image" />
            <button className='previous-carousel-button' onClick={prevImage}><i class="fa-solid fa-chevron-left"></i></button>
            <button className='next-carousel-button' onClick={nextImage}><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    );
}

export default Carousel;
