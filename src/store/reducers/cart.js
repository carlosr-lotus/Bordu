const INITIAL_STATE = [];

// This reducer will be responsible for taking care of the cart component with the products added to it.
export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD-CART':
            return [...state, action.payload];
        case 'REMOVE-CART':
            return state;
        default:
            return state;
    }
}