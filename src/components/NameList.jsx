import React from "react";
import Person from "./Person";

function NameList() {
    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 27,
            skill: "React",
        },
        {
            id: 2,
            name: "Clark",
            age: 26,
            skill: "Angular",
        },
        {
            id: 3,
            name: "Diana",
            age: 22,
            skill: "Vue",
        },
    ];
    const personList = persons.map((person, id) => (
        <Person person={person} key={id} />
    ));
    return <div>{personList}</div>;
}

export default NameList;

// const names = ["Bruce", "Clark", "Diana"];
// const nameList = names.map((name, id) => <h2 key={id}>{name}</h2>);
// return <div>{nameList}</div>;
