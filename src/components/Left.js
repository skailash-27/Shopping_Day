import React from 'react'
import { CartState } from './Context'


function Left() {
    const {

        state: { cart },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
        productDispatch,
    } = CartState();



    return (
        <div className='left'>
            <div className='left_body'>
                <h2>Filter Products</h2>
                <div className='input_1'>
                    <input className='ascending' type='radio'

                        checked={sort == "lowToHigh" ? true : false}
                        onChange={() => {
                            productDispatch({
                                type: "SORT_BY_PRICE_LOW_TO_HIGH",
                                payload: "lowToHigh",
                            })

                        }}
                    />
                    <label className='input_1_radio'>Ascending</label>
                </div>
                <div className='input_1'>
                    <input className='ascending' type='radio'
                        checked={sort == "hightolow" ? true : false}
                        onChange={() => {
                            productDispatch({
                                type: "SORT_BY_PRICE_HIGH_TO_LOW",
                                payload: "hightolow",
                            })

                        }
                        }


                    />
                    <label className='input_1_radio'>Descending</label>
                </div>
                <div className='input_1'>
                    <input className='ascending' type='checkbox'


                        onChange={() => {
                            productDispatch({
                                type: "FILTER_BY_STOCK",

                            })

                        }
                        }
                        checked={byStock}


                    />
                    <label className='input_1_radio'>
                        Include Out of Stock</label>
                </div>
                <div className='input_1'>
                    <input className='ascending' type='checkbox'
                        onChange={() => {
                            productDispatch({
                                type: "FILTER_BY_DELIVERY",

                            })

                        }
                        }
                        checked={byFastDelivery}

                    />
                    <label className='input_1_radio'>Fast Delivery Only</label>
                </div>


                <div className='input_1'>
                    <button className='clear_filter'
                        onClick={() =>
                            productDispatch({
                                type: "CLEAR_FILTERS",
                            })
                        }
                    >
                        Clear Filters
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Left