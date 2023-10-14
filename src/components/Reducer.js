
export const cartReducer = (state, action) => {

    switch (action.type) {

        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id != action.payload.id),
            };
        case "CHANGE_CART_QUANTITY":

            return {
                ...state,
                cart: state.cart.filter((item) =>
                    item.id == action.payload.id ? (item.qty = action.payload.qty) : item.qty
                ),
            };
        default:
            return state;




    }




}

export const productReducer = (state, action) => {

    switch (action.type) {
        case "SORT_BY_PRICE_LOW_TO_HIGH":
            return { ...state, sort: action.payload }
        case "SORT_BY_PRICE_HIGH_TO_LOW":
            return { ...state, sort: action.payload }
        case "FILTER_BY_STOCK":
            return { ...state, byStock: !state.byStock };
        case "FILTER_BY_DELIVERY":
            return { ...state, byFastDelivery: !state.byFastDelivery };
        case "FILTER_BY_RATING":
            return { ...state, byRating: action.payload };
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload };
        case "CLEAR_FILTERS":
            return { sort: '', byStock: false, byFastDelivery: false, byRating: 0 };
        default:
            return state;







    }





}