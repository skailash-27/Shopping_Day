import React from 'react'
import Data from './Data'
import Cart_Product from './Cart_Product'
import { CartState } from './Context'

function Cart_Left() {

    const {
        state: { cart },
        dispatch,
    } = CartState();
    return (
        <div className='cart_left'>

            {
                cart.length > 0 ?
                    (

                        cart.map((item) => {
                            return (
                                <Cart_Product
                                    img={item.img}
                                    title={item.title}
                                    price={item.price}
                                    ratings={item.ratings}
                                    fastDelivery={item.fastDelivery}
                                    inStock={item.inStock}
                                    id={item.id}
                                    key={item.id}

                                />
                            )



                        })

                    )
                    : (
                        <div className='empty_cart'>
                            <h3>
                                Cart is Empty !!!
                            </h3>
                        </div>
                    )
            }

        </div>
    )
}

export default Cart_Left