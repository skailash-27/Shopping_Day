import React from 'react'
import { Link } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi'
import { CartState } from './Context'

function Cart_Navbar() {
    const {
        state: { cart }
    } = CartState();
    return (
        <nav className='nav'>
            <ul>
                <li className='title_name'>
                    <Link to='/' className='title'>
                        Shopping Cart
                    </Link>
                </li>
                <li>
                    <div className='cart_img'>
                        <div>
                            <HiShoppingCart
                                style={{ fontSize: 30, color: 'white' }}
                            />
                        </div>
                        <div>{cart.length}</div>

                    </div>
                </li>
            </ul>



        </nav>
    )
}

export default Cart_Navbar