const INITIAL_STATE = JSON.parse(localStorage.getItem("product"));

export default function productPage(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SELECT_PRODUCT": 
            state = action.payload;
            return state;
        default:
            return state;
    }
};