import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();
const MovieContext = createContext();

function Component1() {
    const [user, setUser] = useState("Aashik Shihaab");
    return (
        <UserContext.Provider value={user}>
            <div>
                <MovieContext.Provider value={"Aashique2"}>
                    <h1>{`Hello ${user}`}</h1>
                    <Component2 />
                </MovieContext.Provider>
            </div>
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <div>
            <h1>Component 2</h1>
            <Component3 />
        </div>
    );
}

function Component3() {
    return (
        <div>
            <h1>Component 3</h1>
            <Component4 />
        </div>
    );
}

function Component4() {
    return (
        <div>
            <h1>Component 4</h1>
            <Component5 />
        </div>
    );
}

function Component5() {
    const user = useContext(UserContext);
    const movie = useContext(MovieContext);
    return (
        <div>
            <h1>Component 5</h1>
            <h2>{`Hello ${user}, This is your today's movie ${movie}`}</h2>;
        </div>
    );
}

export default Component1;

{
    /* <UserContext.Consumer>
    <h1>Component 5</h1>
    {(user) => {
        return <h2>{`Hello ${user}`}</h2>;
    }}
</UserContext.Consumer>; */
}
