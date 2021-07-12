import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import carouselData from './carouselData';

import './carousel.css';
import { useState } from 'react';

export default function Carousel() {

    const [carousel] = useState(carouselData);

    /* !!!!! 
     TASKS TO COMPLETE:
        1) CREATE NEXT COMPONENT AND IMPLEMENT SLIDERS/CAROUSEL FEATURES
            1.1) Carousel Container (Text + Buttons + Img) = COMPLETED!!
            1.2) Implement Carousel Features (prev/next functional buttons) = PENDING...
        2) ADJUST TO BE RESPONSIVE IN DIFFERENT RESOLUTIONS
        3) CHECK IF THE CAROUSEL/SLIDER WORKS PROPERLY

     * YOU ARE AMAZING! AND YOU WILL FINISH THIS WEBSITE AND BECOME AN AMAZING DEVELOPER
     * TRUST IN YOURSELF! YOU CAN DO IT!!!
     !!!!!
    */

    return (
        <div className="carousel-global-container">

            {carousel.map((item) => (
                <div className="carousel-local-container" key={item.id}>
                    
                    <div className="carousel-content-container">
                        <h1>{item.title1}</h1>
                        <h2>{item.title2}</h2>

                        <div className="carousel-btns">
                            <button><FaArrowCircleLeft size={30} fill="var(--Logo-Font-White)" /></button>
                            <button><FaArrowCircleRight size={30} fill="var(--Logo-Font-White)"/></button>
                        </div>
                    </div>

                    <img src={item.image} alt="carousel-img"/>
                </div>
                ))}

        </div>
    )
}