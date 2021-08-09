import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa';

import makeupShopData from './MakeupShopData';

import './MakeupShop.css';

export default function MakeupShop() {

    const dispatch = useDispatch();
    const history = useHistory();

    const makeupData = makeupShopData;

    const handleClick = (product) => {
        dispatch({type : "SELECT_PRODUCT", payload : product});
        history.push("/makeup/product");
        localStorage.setItem("product", JSON.stringify(product));
    }

    return (
        <div className="makeupShop-global-container">
            
            <div className="makeupShop-presentation">
                <h1>Maquiagem</h1>
                <img src={require("../../images/makeup-page.png").default} alt="papel-de-parede-pagina-maquiagem" />
            </div>

            <h2 className="linha-bronze">Linha Bronze</h2>

            {/* Display products (prices, photos, etc) */}
            {/* "Linha Bronze" de Maquiagem */}
            <div className="makeup-product-box-container">
                
                {makeupData.map((data) => {
                    
                    const { id, img, title, price } = data;

                    return (
                        <div className="makeup-product-box" key={id}>
                
                            <img src={img} alt="product-visual" />

                            <div className="makeup-product-details">
                                
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