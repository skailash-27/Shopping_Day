import React from 'react'
import Rating from './Rating'
import { CartState } from './Context';

function Product({ item, key }) {

    const { id, img, title, price, fastDelivery, ratings } = item;
    const {
        state: { cart },
        dispatch
    } = CartState();
    return (
        <div className='each_product' key={item.id}>
            <img src={img} className='product_img'></img>
            <div className='product_info'>

                <div className='product_title'>{title}</div>
                <div className='product_price'>₹ {price}</div>
                <div className='product_delivery'>{fastDelivery}</div>
                <div>
                    <Rating ratings={ratings} />


                </div>

            </div>

            {item.inStock == 0 ?
                (<button className='add_to_cart_btn not_in_stock'
                    disabled={true}
                >
                    Out of Stock
                </button>)

                : (



                    cart.some((item) => item.id == id) ? (
                        < button className='remove_from_cart'
                            onClick={() =>

                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: item,
                                })
                            }
                        >
                            Remove from Cart

                        </button>

                    ) : (

                        < button className='add_to_cart_btn'
                            disabled={item.inStock == 0}
                            onClick={() =>
                                dispatch(
                                    {
                                        type: "ADD_TO_CART",
                                        payload: item,
                                    }
                                )
                            }

                        >
                            Add to Cart
                        </button>


                    )


                )
            }

        </div >
    )
}

export default Product