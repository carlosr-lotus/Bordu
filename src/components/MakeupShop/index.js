import { FaShoppingBag } from 'react-icons/fa';

import makeupShopData from './MakeupShopData';

import './MakeupShop.css';

export default function MakeupShop() {

    const makeupData = makeupShopData;

    return (
        <div className="makeupShop-global-container">
            
            <div className="makeupShop-presentation">
                <h1>Maquiagem</h1>
                <img src={require("../../images/makeup-page.png").default} alt="papel-de-parede-pagina-maquiagem" />
            </div>

            <h2 className="linha-bronze">Linha Bronze</h2>
            {/* Display products (prices, photos, etc) */}
            {/* "Linha Bronze" de Maquiagem */}
            <div className="product-box-container">
                
                {makeupData.map((data) => {
                    
                    const { id, img, title, price } = data;

                    return (
                        <div className="product-box" key={id}>
                
                            <img src={img} alt="product-visual" />

                            <div className="product-details">
                                <h3>{title}</h3>
                                <h4>R$ {price}</h4>

                                <button className="red-button">
                                    <FaShoppingBag />
                                    <p>Comprar</p>
                                </button>
                            </div>
                        </div>
                    )

                })}
            </div>

            <h3 className="more-products-text">Mais produtos virão em breve ;)</h3>
        </div>
    )
}