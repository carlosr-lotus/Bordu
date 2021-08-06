import MakeupProduct from "../../../components/MakeupShop/MakeupProduct";

import { useSelector } from "react-redux";

export default function MakeupProductPage() {

    const reducer = useSelector(state => state.productPage)
    console.log(reducer.id);

    return (
        <>
            {/* Call component and pass the reducer containing the data do display the properly product */}
            {reducer ? <MakeupProduct data={reducer}/> : <p>Error 404</p>}
        </>
    )
}