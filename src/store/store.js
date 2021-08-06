import { createStore, combineReducers } from "redux";

// import Reducers
import productPage from "./reducers/productPage";

export const store = createStore(combineReducers({
    productPage
}))