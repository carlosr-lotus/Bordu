import { FaShoppingBag } from 'react-icons/fa';

import OurProductsData from './OurProductsData';

import './OurProducts.css';

    /* !!!!! 
     TASKS TO COMPLETE:
        2) ADJUST TO BE RESPONSIVE IN DIFFERENT RESOLUTIONS = COMPLETED
        3) CREATE 'OURPRODUCTS' SECTION AND MAKE IT RESPONSIVE ACCORDING TO THE DESIGN PROVIDED = PENDING...
     * YOU ARE AMAZING! AND YOU WILL FINISH THIS WEBSITE AND BECOME AN AMAZING DEVELOPER
     * TRUST IN YOURSELF! YOU CAN DO IT!!!
     !!!!!
    */

export default function OurProducts() {

    const sectionBox = OurProductsData;

    return (
        <div className="OurProducts-container">
            <h1>Nossos Produtos</h1>

            {sectionBox.map((box) => (

                // This div will contain the content imported from 'OurProductsData.js'
                <div className={box.id % 2 !== 0 ? "OurProducts-local-container" : "OurProducts-local-container flex-right" } key={box.id}>

                    <div className={box.id % 2 !== 0 ? 
                    "OurProducts-img-container" :
                    "OurProducts-img-container justify-tablet"}>
                        <img src={box.img} alt={box.alt} />
                        <div className={box.id % 2 !== 0 ? "red-ball" : "red-ball ball-left"}></div>
                    </div>

                    <div className={box.id % 2 !== 0 ? "OurProducts-box-content" : "OurProducts-box-content justify-right"}>
                        <h2>{box.title}</h2>
                        <p>{box.text}</p>

                        <button className="red-button">
                            <FaShoppingBag />
                            <p>Comprar</p>
                        </button>
                    </div>

                </div>
            ))}

            <div className="OurProducts-local-container">

                <div className="OurProducts-img-container">
                    <img src={require("../../images/our-products-3.jpeg").default} alt="makeup" />
                    <div className="red-ball"></div>
                </div>

                <div className="OurProducts-box-content">
                    <h2>Presente!</h2>
                    <p>Na sua primeira compra, você irá receber um brinde nosso! É a nossa forma de dizer "Bem vindo(a)!". Esperamos que faça bom uso!
                    </p>

                </div>

            </div>

        </div>
    )
};