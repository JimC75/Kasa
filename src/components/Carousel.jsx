import React, { useState } from 'react';
import arrowLeft from '../images/arrow-left.png'
import arrowRight from '../images/arrow-right.png'

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(0);

    const nextImage = () => {
        // setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
        const newIndex = currentIndex + 1;
        setPreviousIndex(currentIndex);
        if (newIndex < pictures.length) {
            setCurrentIndex(newIndex);
        }
        else {
            setCurrentIndex(0);
        }
    };

    const prevImage = () => {
        // setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
        const newIndex = currentIndex - 1;
        setPreviousIndex(currentIndex);
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
            {/* <img src={pictures[previousIndex]} alt="Carousel" className="carousel-image closed-image" /> */}
            <button className='previous-carousel-button' onClick={prevImage}>

                <img src={arrowLeft} alt="previous image" />
            </button>
            <button className='next-carousel-button' onClick={nextImage}>

                <img src={arrowRight} alt="next image" />

            </button>
            <span>
                {currentIndex + 1 + "/" + pictures.length}
            </span>
        </div>
    );
}

export default Carousel;
