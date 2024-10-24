import React, { useState } from "react";

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
    });
    // const { brand, model, year, color } = car; // No need to use car.brand
    const updateColor = () => {
        setCar((prevState) => ({
            ...prevState,
            color: "blue",
        }));
    };
    return (
        <div>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}
            </p>
            <button onClick={updateColor}>Blue</button>
        </div>
    );
}

export default Car;

// const [brand, setBrand] = useState("Ford");
//     const [model, setModel] = useState("Mustang");
//     const [year, setYear] = useState("1964");
//     const [color, setColor] = useState("red");
//     return (
//         <div>
//             <h1>My {brand}</h1>
//             <p>
//                 It is a {color} {model} from {year}
//             </p>
//         </div>
//     );
