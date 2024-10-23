import React from "react";

function Person({ person, id }) {
    return (
        <h2 key={id}>
            I'm {person.name}. I'm {person.age} years old. I know {person.skill}
        </h2>
    );
}

export default Person;
