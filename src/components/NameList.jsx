import React from "react";
import Person from "./Person";

function NameList() {
    const names = ["Bruce", "Clark", "Diana"];
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
    // const personList = persons.map((person, id) => (
    //     <Person person={person} key={id} />
    // ));
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
    // return <div>{personList}</div>;
    return <div>{nameList}</div>;
}

export default NameList;

// const names = ["Bruce", "Clark", "Diana"];
// const nameList = names.map((name, index) => <h2 key={id}>{name}</h2>);
// return <div>{nameList}</div>;
