import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducer";
import data from "./Data";

const Cart = createContext();

const Context = ({ children }) => {

    const products = data;

    const [state, dispatch] = useReducer(cartReducer, {

        products: products,
        cart: [],

    });

    const [productState, productDispatch] = useReducer(productReducer, {

        sort: "",
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",


    })

    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
            {children}
        </Cart.Provider>

    )

}

export const CartState = () => {
    return useContext(Cart);
}

export default Context;