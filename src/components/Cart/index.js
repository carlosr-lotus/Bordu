import { MdAttachMoney } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import './Cart.css';
import { useState } from 'react';

export default function Cart() {
    
    let finalPrice = 0.00;
    finalPrice += 50.91;

    // =-=-=-=-=-=-=-=-=-==-=-=-=-=--=-=-=-=-=-=-=
    // To Do:
    // 1) Pass the product data so it can stored in the cart
    // 2) Create the cart functions such as 'DELETE' item
    // 3) Make it responsive
    
    // Dont worry... you got this. Learn Redux and understand it!


    const [shippingTax, setShippingTax] = useState(false);

    return (
        <div className="cart-global-container">

            <div className="cart-local-container">
                <FaTrashAlt className="delete-cart" size={15}/>

                <div className="cart-product-details">
                    <h2>Item</h2>
                    <img src={require("../../images/base-bordu.png").default} alt="card-pro"/>
                    <h1>Base Bordu - Linha Bronze</h1>
                </div>

                <div className="cart-price-details">
                    <div className="cart-product-price">
                        <h2>Preço</h2>
                        <strong>R$ 99,00</strong>
                    </div>

                    {/* Shipping Tax Input */}
                    <div className="shipping-container">
                        <label htmlFor="shipping">Frete:</label>
                        <input type="text" id="shipping" name="shipping" placeholder="20209-383" required />

                        <button className="red-button shipping-btn" onClick={() => setShippingTax(true)}>
                            <p>Confirmar Frete</p>
                        </button>

                        {shippingTax ? <p className="price-shipping">Taxa entrega: R$ 9,99</p> : null}
                    </div>
                </div>
            </div>
          
            {/* Final Price */}
            <div className="cart-final-price-container">
                <strong className="cart-final-price">Total: R$ {finalPrice.toFixed(2).replace(".", ",")}</strong>
                <button className="red-button buy-btn">
                    <MdAttachMoney size={25}/>
                    <p>Finalizar Compra</p>
                </button>
            </div>
        </div>
    )
}