import React from "react";


const Product = ({name, price}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>${price}</p>
        </div>
    );
};


export default Product;