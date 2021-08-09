import MakeupProduct from "../../../components/MakeupShop/MakeupProduct";
import MakeupProductReviews from "../../../components/MakeupShop/MakeupProduct/MakeupProductReviews";

import { useSelector } from "react-redux";


export default function MakeupProductPage() {

    const reducer = useSelector(state => state.productPage);
    console.log(reducer.reviews);

    return (
        <>
            {/* Call component and pass the reducer containing the data object to display the properly product */}
            {reducer ? <MakeupProduct data={reducer}/> : <p>Error 404</p>}

            {/* Call component and pass the object containing the reviews that is inside the product object */}
            <MakeupProductReviews data={reducer.reviews}/>
        </>
    )
};