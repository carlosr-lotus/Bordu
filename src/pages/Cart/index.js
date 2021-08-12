import { useSelector } from 'react-redux';
import Cart from "../../components/Cart";

export default function CartPage() {

    const cartList = useSelector(state => state.cart);

    return (
        <>
            <Cart data={cartList}/>
        </>
    )
}