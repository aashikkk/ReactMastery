import React, { useCallback, useState } from "react";
import Product from "./Product";

const MainuseCallb = () => {
    const [prod, setProd] = useState(["prod 1", "prod 2"]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);

    const addToCart = useCallback(() => {
        setCart(cart + 1);
    }, [cart]);
    return (
        <div>
            <h3>Count: {count} </h3>
            <h3>Cart: {cart} </h3>
            <button onClick={() => setCount(count + 1)}>+ Count</button>
            <div>
                {prod.map((prod, i) => {
                    return (
                        <Product name={prod} addToCart={addToCart} key={i} />
                    );
                })}
            </div>
        </div>
    );
};

export default MainuseCallb;
