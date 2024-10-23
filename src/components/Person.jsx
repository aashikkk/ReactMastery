import React from "react";

function Person({ person }) {
    return (
        <h2>
            I'm {person.name}. I'm {person.age} years old. I know {person.skill}
        </h2>
    );
}

export default Person;
