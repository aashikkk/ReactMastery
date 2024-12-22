import React, { useState } from "react";

const Counter = ({ render }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return render(count, increment, decrement); //// Passing count and functions to parent via render prop
};

const RenderProps = () => {
    return (
        <div>
            <h1>RenderProps Example</h1>
            <Counter
                render={(count, increment, decrement) => (
                    <div>
                        <h1>Count: {count} </h1>
                        <button onClick={increment}>+</button>
                        <button onClick={decrement}>-</button>
                    </div>
                )}
            />
        </div>
    );
};

export default RenderProps;
