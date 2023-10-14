import React from 'react'
import { useEffect, useState } from 'react';
import { CartState } from './Context'

function Cart_Right() {
    const [total, setTotal] = useState(0);
    const {
        state: { cart }
    } = CartState();

    useEffect(() => {

        let cost = cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)

        setTotal(cost);

    }, [cart]);


    return (
        <div className='cart_right'>
            <h2 className='cart_right_elements'>Subtotal (0) items</h2>
            <h4 className='cart_right_elements'>Total :₹ {total} </h4>
            <button className='cart_right_elements proceed_btn'>
                Proceed to Checkout
            </button>
        </div>
    )
}

export default Cart_Right