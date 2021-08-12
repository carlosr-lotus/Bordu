import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";

import './FragranceProduct.css';

export default function FragranceProduct(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    let productData = props.data;

    const handleClick = (product) => {
        dispatch({type: "ADD-CART", payload: product});
        history.push("/cart");
    }

    // Get price from object ( string )
    // console.log(typeof props.data.price);
    // Convert it to float
    // let floatValue = parseFloat(props.data.price);
    // console.log(typeof floatValue);
    // console.log(floatValue);
    // floatValue += 9.99;
    // console.log(floatValue);
    // floatValue = floatValue.toFixed(2).replace(".", ",");
    // console.log(typeof floatValue);
    // console.log(floatValue);
    // Sum 10
    // Return as a string again

    return (
        <div className="product-details-container">

            {/* Container IMG */}
            <div className="product-details-img">
                <img src={productData.img} alt="product-display"/>
            </div>

            {/* Container Product Details */}
            <div className="product-details-text">

                <div className="product-title-stars">
                    <h1>{productData.title}</h1>

                    <div className="stars-group">
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <h3>({productData.reviewCount} avaliações)</h3>
                    </div>
                </div>

                <div className="price-related-container">
                    <h2>R$ {productData.price}</h2>
                    <button className="red-button fragranceProduct-btn" onClick={() => handleClick(productData)}>
                        <FaShoppingBag />
                        <p>Comprar</p>
                    </button>
                </div>

                <div className="product-description-container">
                    <p><strong>Descrição: </strong>{productData.desc}</p>
                </div>
            </div>
        </div>
    )
};