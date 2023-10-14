import React from 'react'
import Rating from './Rating'
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from './Context'

function Cart_Product(prod) {

    const { img, title, price, ratings, fastDelivery, inStock, id } = prod;

    const {
        state: { cart },
        dispatch,
    } = CartState();

    return (
        <div className='cart_product_info'>

            <div className='each_product_info'>
                <img src={img}></img>
            </div>
            <div className='each_product_info'>{title}</div>
            <div className='each_product_info'>₹ {price}</div>
            <div className='each_product_info'>

                <Rating
                    ratings={ratings}
                />
            </div>
            <div className='each_product_info'>
                <select className='quantity_selector'
                    value={prod.qty}
                    onChange={(e) =>
                        dispatch({
                            type: "CHANGE_CART_QUANTITY",
                            payload: {
                                id: prod.id,
                                qty: e.target.value,
                            },
                        })
                    }
                >
                    {
                        [...Array(inStock)].map((_, i) => (

                            <option key={i} >
                                {i + 1}
                            </option>


                        )



                        )

                    }
                </select>

            </div>
            <div className='each_product_info'>
                <AiFillDelete
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                        })
                    }
                />
            </div>

        </div>
    )
}

export default Cart_Product