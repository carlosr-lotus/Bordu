import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useState } from 'react';

import carouselData from './carouselData';

import './carousel.css';

export default function Carousel() {

    // index = data array address (0, 1, 2...)
    const [index, setIndex] = useState(0);
    const { title1, title2, image } = carouselData[index];

    // Check if index number is bigger than the array length or less than 0
    const checkIndexNum = (number) => {
        if (number > carouselData.length - 1) {
            return 0;
        }

        if (number < 0) {
            return carouselData.length - 1;
        }

        return number;
    };

    // Function that changes current slide to the next one
    const nextSlide = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndexNum(newIndex);
        })
    };

    // Function that changes current slide to the previous one
    const prevSlide = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndexNum(newIndex);
        })
    }

    return (
        <div className="carousel-global-container">

            <div className="carousel-local-container">
                    
                <div className="carousel-content-container">
                    <h1>{title1}</h1>
                    <h2>{title2}</h2>

                    <div className="carousel-btns">
                        <button className="prev-btn" onClick={ prevSlide } >
                            <FaArrowCircleLeft size={30} />
                        </button>
                        <button className="next-btn" onClick={ nextSlide }>
                            <FaArrowCircleRight size={30} />
                        </button>
                    </div>
                </div>

                <img src={image} alt="carousel-img"/>
            </div>
        </div>
    )
}