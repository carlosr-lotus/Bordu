import { FaShoppingBag } from 'react-icons/fa';

import OurProductsData from './OurProductsData';

import './OurProducts.css';

    /* !!!!! 
     TASKS TO COMPLETE:
        1) FIX MOBILE NAV BAR TO WORK PROPERLY WITH USECONTEXT()
            1.1) Create 'MAIN' component to englobe all components in the APP besides Header and Footer
            1.2) Make sure when mobile navbar is TRUE, all the content inside 'MAIN' component is gone so it can be responsive.
        2) ADJUST TO BE RESPONSIVE IN DIFFERENT RESOLUTIONS = pending... 
        3) CHECK IF THE CAROUSEL/SLIDER WORKS PROPERLY = pending...
     * YOU ARE AMAZING! AND YOU WILL FINISH THIS WEBSITE AND BECOME AN AMAZING DEVELOPER
     * TRUST IN YOURSELF! YOU CAN DO IT!!!
     !!!!!
    */

export default function OurProducts() {
    return (
        <div className="OurProducts-container">
            <h1>Nossos Produtos</h1>

            {/* This div will contain details imported from 'OurProductsData' */}
            <div className="OurProducts-local-container">

                <div className="OurProducts-img-container">
                    <img src={require("../../images/our-products-1.jpg").default} alt="makeup" />
                </div>

                <h2>Maquiagem</h2>
                <p>Nós trabalhamos duro para oferecer aos nossos clientes a experiência de uma beleza única e memorável. Seja belo(a) com produtos totalmente orgânicos!</p>

                <button className="red-button">
                    <FaShoppingBag />
                    Comprar
                </button>

            </div>
        </div>
    )
};