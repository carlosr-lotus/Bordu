const INITIAL_STATE = JSON.parse(localStorage.getItem("product"));

// This reducer will be responsible get the object data containing the product details (example: "MakeupShopData") and return it to the product page container
export default function productPage(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SELECT_PRODUCT": 
            state = action.payload;
            return state;
        default:
            return state;
    }
};