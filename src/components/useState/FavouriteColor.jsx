import React, { useState } from "react";

function FavouriteColor() {
    const [color, setColor] = useState("red");

    return (
        <div>
            <h1>My Favourite Color is {color}!</h1>
            <button onClick={() => setColor("blue")}>Blue</button>
        </div>
    );
}

export default FavouriteColor;
