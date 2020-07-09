import React from 'react'
import Products from'./Products'
function ProductItem(props){

    return(
        <div>
            <h1>{props.item}</h1>
            <p>{props.Description}</p>
        </div>
    )

}
export default ProductItem