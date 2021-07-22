import { FaShoppingBag } from 'react-icons/fa';

import OurProductsData from './OurProductsData';

import './OurProducts.css';

    /* !!!!! 
     TASKS TO COMPLETE:
        1) FIX MOBILE NAV BAR TO WORK PROPERLY WITH USECONTEXT() = COMPLETED with adding position: fixed in the mobile menu bar
        2) ADJUST TO BE RESPONSIVE IN DIFFERENT RESOLUTIONS = COMPLETED
        3) CREATE 'OURPRODUCTS' SECTION AND MAKE IT RESPONSIVE ACCORDING TO THE DESIGN PROVIDED = PENDING...
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
                    <div className="red-ball"></div>
                </div>

                <div className="OurProducts-box-content">
                    <h2>Maquiagem</h2>
                    <p>Nós trabalhamos duro para oferecer aos nossos clientes a experiência de uma beleza única e memorável. Seja belo(a) com produtos totalmente orgânicos!</p>

                    <button className="red-button">
                        <FaShoppingBag />
                        <p>Comprar</p>
                    </button>
                </div>

            </div>

            {/* This div will contain details imported from 'OurProductsData' */}
            <div className="OurProducts-local-container">

                <div className="OurProducts-img-container">
                    <img src={require("../../images/our-products-2.jpeg").default} alt="makeup" />
                </div>

                <div className="OurProducts-box-content justify-right">
                    <h2>Fragrâncias</h2>
                    <p>Tem algo mais charmoso ao sentir o gostoso cheiro de um perfume? Seria melhor ainda vindo de nós. Temos diversos perfumes perfeitos para qualquer ocasião.</p>

                    <button className="red-button">
                        <FaShoppingBag />
                        <p>Comprar</p>
                    </button>
                </div>

            </div>
        </div>
    )
};