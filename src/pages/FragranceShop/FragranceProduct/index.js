import FragranceProduct from "../../../components/FragranceShop/FragranceProduct";
import FragranceProductReviews from "../../../components/FragranceShop/FragranceProduct/FragranceProductReviews";
import Footer from "../../../components/Footer";

import { useSelector } from "react-redux";

export default function FragranceProductPage() {

    const reducer = useSelector(state => state.productPage);
    console.log(reducer);

    return (
        <>
            {/* Call component and pass the reducer containing the data object to display the properly product */}
            {reducer ? <FragranceProduct data={reducer}/> : <p>Error 404</p>}

            {reducer.reviews ? <FragranceProductReviews data={reducer.reviews}/> : null}

            <Footer /> 
        </>
    )
}