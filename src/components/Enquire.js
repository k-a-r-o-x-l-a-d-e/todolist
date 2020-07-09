import React from 'react'

import Products from './Products'
import ProductItem from './ProductItems'
function Enquire(){
    const Product= Products.map(product=>{
        return(
            <ProductItem
            key={product.id}
            item={product.item}
            Description={product.Description}
            price={product.Price}
            />
        )
    })
    return(
    <div>
        {Product}
    </div>
    )
}
export default Enquire