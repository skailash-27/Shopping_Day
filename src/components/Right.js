import React from 'react'
import Data from './Data'
import Product from './Product'
import { CartState } from './Context';



function Right() {

    const {

        state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },


    } = CartState();

    const transformProducts = () => {

        let sortedProducts = products;

        if (sort != "") {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }
        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }
        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery == 'Fast delivery');
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.title.toLowerCase().includes(searchQuery)
            );
        }


        return sortedProducts;


    }


    return (
        <div className='right'>

            {
                transformProducts().map((item) => {


                    return (
                        <Product
                            item={item}
                            key={item.id}
                        />
                    )



                })
            }







        </div>
    )
}

export default Right