import { useSelector } from 'react-redux';
import { MdAttachMoney } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import './Cart.css';

export default function Cart(props) {

    const [shippingTax, setShippingTax] = useState(false);
    const [checkout, setCheckout] = useState(false);
    const dispatch = useDispatch();

    // Get array from Reducer
    const cartList = useSelector(state => state.cart);

    // Get props data containing the selected product data
    let productData = props.data;

    // Create variable and pass the sum of all the prices inside the array passed from reducer
    let finalPrice = 0.00;
    finalPrice = cartList.reduce((prevValue, currentValue) => {return prevValue + currentValue.price}, 0);

    if (shippingTax) {
        finalPrice += 9.99;
    }

    return (
        <div className="cart-global-container">

            {productData.map((data) => {
                
                return (
                    <div className="cart-local-container" key={data.id}>

                        <FaTrashAlt className="delete-cart" size={15} onClick={() => dispatch({type: 'REMOVE-CART', payload: data})}/>

                        <div className="cart-product-details">
                            <h2>Item</h2>
                            <img src={data.img} alt="card-product"/>
                            <h1>{data.title}</h1>
                        </div>

                        <div className="cart-price-details">
                            <div className="cart-product-price">
                                <h2>Preço</h2>
                                <strong>R$ {data.price.toFixed(2).replace(".", ",")}</strong>
                            </div>

                            
                        </div>
                    </div>
            )})}

            {/* Shipping Tax Input */}
            {cartList.length > 0 ? <div className="shipping-container">
                <label htmlFor="shipping">Frete:</label>
                <input type="text" id="shipping" name="shipping" placeholder="20209-383" required />

                <button className="red-button shipping-btn" onClick={() => setShippingTax(true)}>
                    <p>Confirmar Frete</p>
                </button>

                {shippingTax ? <p className="price-shipping">Taxa entrega: R$ 9,99</p> : null}
            </div> : null}
          
            {/* Final Price */}
            <div className="cart-final-price-container">
                <strong className="cart-final-price">Total: R$ {finalPrice.toFixed(2).replace(".", ",")}</strong>
                <button className="red-button buy-btn" onClick={() => setCheckout(true)}>
                    <MdAttachMoney size={25}/>
                    <p>Finalizar Compra</p>
                </button>
                {checkout ? <p className="success-buy">Pedido finalizado com sucesso!</p> : null}    
            </div>
        </div>
    )
}