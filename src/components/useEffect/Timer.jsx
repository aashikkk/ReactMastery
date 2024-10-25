import React, { useEffect, useState } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <h1>I've rendered {count} times!</h1>
        </div>
    );
}

export default Timer;
