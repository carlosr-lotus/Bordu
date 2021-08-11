import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa';

import fragranceShopData from './FragranceShopData';

import './FragranceShop.css';

export default function FragranceShop() {

    const dispatch = useDispatch();
    const history = useHistory();

    const fragranceData = fragranceShopData;

    const handleClick = (product) => {
        dispatch({type: "SELECT_PRODUCT", payload: product});
        history.push("/fragrance/product");
        localStorage.setItem("product", JSON.stringify(product));
    }

    return (
        <div className="fragranceShop-global-container">
            
            <div className="fragranceShop-presentation">
                <h1>Fragrância</h1>
                <img src={require("../../images/parfum-page.jpeg").default} alt="papel-de-parede-pagina-fragrância" />
            </div>

            <h2 className="linha-bronze">Linha Bronze</h2>

            {/* Display products (prices, photos, etc) */}
            {/* "Linha Bronze" de Maquiagem */}
            <div className="fragrance-product-box-container">
                
                {fragranceData.map((data) => {
                    
                    const { id, img, title, price } = data;

                    return (
                        <div className="fragrance-product-box" key={id}>
                
                            <img src={img} alt="product-visual" />

                            <div className="fragrance-product-details">
                                <h3>{title}</h3>
                                <h4>R$ {price}</h4>

                                <div className="link-page-underline-none">
                                    <button className="red-button" onClick={() => handleClick(data)}>
                                        <FaShoppingBag />
                                        <p>Comprar</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>

            <h3 className="more-products-text">Mais produtos virão em breve ;)</h3>
        </div>
    )
}