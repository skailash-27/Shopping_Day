import React from 'react'
import Cart_Navbar from './Cart_Navbar'
import Cart_Left from './Cart_Left'
import Cart_Right from './Cart_Right'

function Cart() {
    return (
        <>
            <Cart_Navbar />
            <div className='cart_body'>

                <Cart_Left />
                <Cart_Right />

            </div>
        </>
    )
}

export default Cart