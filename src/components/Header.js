import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { CartState } from './Context'

function Header() {

    const {
        state:{products,cart},
        productState:{ sort, byStock, byFastDelivery, byRating, searchQuery },
        productDispatch
    }=CartState();

    return (

        <nav className='nav'>
            <ul>
                <li className='title_name'>
                    <Link to='/' className='title'>
                        Shopping Cart
                    </Link>
                </li>
                <li>
                    <input
                        placeholder='Search a Product...'
                        className='search_product'
                        
                        onChange={(e)=>
                            productDispatch({
                                type:"FILTER_BY_SEARCH",
                                payload:e.target.value

                            })

                        } 
                        value={searchQuery}

                    />
                </li>
                <li>
                    <div className='cart_img'>
                        <div>
                            <Link to='/cart' className='cart_icon'>
                                <HiShoppingCart
                                    style={{ fontSize: 30, color: 'white' }}
                                />
                            </Link>
                        </div>
                        <div>{cart.length}</div>

                    </div>
                </li>
            </ul>



        </nav>
    )
}

export default Header