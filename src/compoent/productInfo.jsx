import React from "react";

const ProductInfo = () => {
    const product = {
        name: "laptop",
        price: "$1200",
        avaliabilty: "In stock"
    }
    return(
        <>
        <h2>Product name = {product.name}</h2>
        <h2>Product price = {product.price}</h2>
        <h2>Product availability =  {product.avaliabilty}</h2>
        </>
    );
};


export default ProductInfo;