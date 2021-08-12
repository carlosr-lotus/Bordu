import { createStore, combineReducers } from "redux";

// import Reducers
import productPage from "./reducers/productPage";
import cart from "./reducers/cart";

export const store = createStore(combineReducers({
    productPage,
    cart
}));