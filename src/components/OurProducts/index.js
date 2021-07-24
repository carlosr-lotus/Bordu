import { FaShoppingBag } from 'react-icons/fa';

import OurProductsData from './OurProductsData';

import './OurProducts.css';

export default function OurProducts() {

    const sectionBox = OurProductsData;

    return (
        <div className="OurProducts-container">
            <h1>Nossos Produtos</h1>

            {sectionBox.map((contentData) => { 

                const { id, title, text, img, alt } = contentData;

                return (
                    <div className={id % 2 !== 0 ? "OurProducts-local-container" : "OurProducts-local-container flex-right" } key={id}>

                        <div className={id % 2 !== 0 ? 
                        "OurProducts-img-container" :
                        "OurProducts-img-container justify-tablet"}>
                            <img src={img} alt={alt} />
                            <div className={id % 2 !== 0 ? "red-ball" : "red-ball ball-left"}></div>
                        </div>

                        <div className={id % 2 !== 0 ? "OurProducts-box-content" : "OurProducts-box-content justify-right"}>
                            <h2>{title}</h2>
                            <p>{text}</p>

                            <button className="red-button">
                                <FaShoppingBag />
                                <p>Comprar</p>
                            </button>
                        </div>

                    </div>
                )
            })}

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