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

    /* !!!!! 
     TASKS TO COMPLETE:
        1) CREATE NEXT COMPONENT AND IMPLEMENT SLIDERS/CAROUSEL FEATURES
            1.1) Carousel Container (Text + Buttons + Img) = COMPLETED!!
            1.2) Implement Carousel Features (prev/next functional buttons) = COMPLETED!
        2) ADJUST TO BE RESPONSIVE IN DIFFERENT RESOLUTIONS = COMPLETED!
        3) CHECK IF THE CAROUSEL/SLIDER WORKS PROPERLY = COMPLETED!

     * YOU ARE AMAZING! AND YOU WILL FINISH THIS WEBSITE AND BECOME AN AMAZING DEVELOPER
     * TRUST IN YOURSELF! YOU CAN DO IT!!!
     !!!!!
    */

    return (
        <div className="carousel-global-container">

            <div className="carousel-local-container">
                    
                <div className="carousel-content-container">
                    <h1>{title1}</h1>
                    <h2>{title2}</h2>

                    <div className="carousel-btns">
                        <button onClick={ prevSlide } >
                            <FaArrowCircleLeft size={30} fill="var(--Logo-Font-White)" />
                        </button>
                        <button onClick={ nextSlide }>
                            <FaArrowCircleRight size={30} fill="var(--Logo-Font-White)" />
                            </button>
                    </div>
                </div>

                <img src={image} alt="carousel-img"/>
            </div>
        </div>
    )
}