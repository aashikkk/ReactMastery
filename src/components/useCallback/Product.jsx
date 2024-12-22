import React, { memo } from "react";

const Product = ({ name, addToCart }) => {
    console.log(`${name} comp re rendered`);

    return (
        <div className="border-">
            <h1>{name}</h1>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    );
};

export default memo(Product);
