import { AiFillStar } from 'react-icons/ai';
import { FaShoppingBag } from 'react-icons/fa';
import './MakeupProduct.css';

export default function MakeupProduct(props) {

    return (
        <div className="product-details-container">

            {/* Container IMG */}
            <div className="product-details-img">
                <img src={props.data.img} alt="product-display"/>
            </div>

            {/* Container Product Details */}
            <div className="product-details-text">

                <div className="product-title-stars">
                    <h1>{props.data.title}</h1>

                    <div className="stars-group">
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <h3>({props.data.reviewCount} avaliações)</h3>
                    </div>
                </div>

                <div className="price-related-container">
                    <h2>R$ {props.data.price}</h2>
                    <button className="red-button">
                        <FaShoppingBag />
                        <p>Comprar</p>
                    </button>
                </div>

                <div className="product-description-container">
                    <p><strong>Descrição: </strong>{props.data.desc}</p>
                </div>
            </div>
        </div>
        
    )
};