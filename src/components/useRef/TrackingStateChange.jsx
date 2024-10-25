import React, { useEffect, useRef, useState } from "react";

function TrackingStateChange() {
    const [inputValue, setInputValue] = useState("");
    const PreviousValue = useRef("");

    useEffect(() => {
        PreviousValue.current = inputValue;
    });

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {PreviousValue.current}</h2>
        </div>
    );
}

export default TrackingStateChange;
