import React from 'react';


const ProductList = () => {
    const products = [
        {id: 1, name: "Phone", price: "$699"},
        {id: 2, name: "laptop", price: "$1200"},
        {id: 3, name: "headphones", price: "$199"},
    ]

    return(
        <div>
            {
                products.map(({id ,name, price})=> (
                        <div key={id}>
                            <h2>{name}</h2>
                            <h2>{price}</h2>
                        </div>
                        
                    )
                )
            }
        </div>
    )
}   


export default ProductList;