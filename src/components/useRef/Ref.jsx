import React, { useEffect, useRef, useState } from "react";

function Ref() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <h1>Render Count: {count.current}</h1>
        </div>
    );
}

export default Ref;
