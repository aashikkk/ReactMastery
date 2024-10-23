# React Mastery

## Table of Contents

-   [React Mastery](#react-mastery)
    -   [Table of Contents](#table-of-contents)
    -   [Pre Requisites](#pre-requisites)
    -   [Installation](#installation)
    -   [Components](#components)
        -   [Functional Components](#functional-components)
        -   [Named Export vs Default Export](#named-export-vs-default-export)
        -   [Class Components](#class-components)
        -   [Functional vs Class Components](#functional-vs-class-component)
        -   [JSX](#jsx)
        -   [Propeties aka Props](#props)
        -   [State](#state)
        -   [Destructuring Prop and State](#destructuring-prop-and-state)
    -   [Event Handling](#event-handling)
    -   [Event Binding](#event-binding)
    -   [Method as Props](#method-as-props)
    -   [Conditional Rendering](#conditional-rendering)
    -   [List Rendering](#list-rendering)

## Pre Requisites

![PreReq](src/assets/PreReq.png)

## Content

-   Fundamentals
-   HTTP
-   Routing
-   Redux
-   Utilities

## Installation

There are multiple ways to install React in your local environment. Here are some of the ways:

1. **Using Create React App**

    Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

```bash
npx create-react-app my-app
cd my-app
npm start
```

2. **Use Vite** - Recommended [Vite](https://vite.dev/guide/)

```bash
npm create vite@latest
```

## Components

Side Nav can be in right side too.
![alt text](src/assets/component.png)

### Component in Code

![alt text](src/assets/compInCode.png)

### Component Types

![alt text](src/assets/componentType.png)

### Components Summary

-   Components describe a part of the UI
-   They are reusable and can be nested inside other components
-   Two Types
    -   Statless Functional Components
    -   Stateful Class Components

### Functional Components

Functional components are a simpler way to write components that only contain a render method and don't have their own state. They are JavaScript functions that accept props as an argument and return React elements.

**Key Points**

-   Functional components are stateless.
-   They are easier to read and test.
-   They can use hooks to manage state and side effects.

JS Function optionally receive the properties and returns JSX (HTML)
![Functional Components](src/assets/funcComp.png)

```bash
//Greet.jsx

import React from 'react'

function Greet() {
  return  <h1>Hello Aashik!</h1>
}

//ES6
const Greet = () => <h1>Hello World</h1>;


export default Greet

//App.jsx
import Greet from './components/Greet'

function App() {
  return (
    <>
      <Greet/>
    </>
  )
}

export default App

```

#### Named Export vs Default Export

**Named Export**

-   Allows you to export multiple values.
-   You must use the same name to import the value.

Example:

```bash
// Greet.jsx
export const Greet = () => <h1>Hello World</h1>;

// App.jsx
import { Greet } from './components/Greet';

function App() {
  return (
    <>
      <Greet />
    </>
  );
}

export default App;
```

**Default Export**

-   Allows you to export a single value.
-   You can import it with any name.

Example:

```bash
// Greet.jsx
const Greet = () => <h1>Hello World</h1>;
export default Greet;

// App.jsx
import MyComponent from './components/Greet';

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
```

**Key Points**

-   Use named exports when you need to export multiple values from a module.
-   Use default exports when a module only exports a single value.

### Class Components

Class components are ES6 classes that extend from React.Component and can have their **own state** and lifecycle methods.

![alt text](src/assets/classComp.png)

```bash
//Welcome.jsx
import React, {Component} from "react";

class Welcome extends Component {
    render(){
        return(
            <h1>Class Component</h1>
        )
    }
}

export default Welcome;

```

#### Functional vs Class Component

![alt text](src/assets/funcVsComp.png)

But after React 16.7, we can use state in functional components by introducing Hooks.

#### Hooks (Will get back later)

-   No breaking changes
-   Completely opt-in & 100% backwards-compatible
-   Component Types - Functional Component and Class components
-   Using state, lifecycle methods and 'this' binding.
-   After understanding state, event binding and lifecycle hooks in class components

### JSX

![alt text](src/assets/jsx.png)

```bash
//Hello.js
import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello, Aashik</h1>
    //     </div>
    // )
    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello Aashik'));
}

export default Hello;

```

![alt text](src/assets/jsxDifference.png)

### Update Note on Import React

Q: Why we don't need to import React anymore?
A:

In React 17 and later, you no longer need to import React to use JSX. This is because the new JSX transform introduced in React 17 automatically imports the necessary functions from the React library behind the scenes.

Explanation
**Before React 17:** You had to import React because JSX was transformed into React.createElement calls.
**React 17 and Later**: The new JSX transform doesn't require React to be in scope, so you don't need to import it explicitly.

Example
**Before React 17**

```bash
import React from 'react';

const Greet = () => <h1>Hello World</h1>;

export default Greet;

```

**React 17 and Later**

```bash
const Greet = () => <h1>Hello World</h1>;

export default Greet;
```

**Key Points**

-   The new JSX transform simplifies the code and reduces the need for boilerplate imports.
-   You can still import React if you need to use other React features like hooks or context.

### Props

-   You can call anything you want that parameter, but the convention is props.
-   Props are immutable. READ ONLY.

To pass the unknown content between, simply use `props.children` between opening and closing tags.

#### For Functional Component

```bash
//Greet.jsx
const Greet = (props) => {
    return(
        <>
            <h1>Hello, {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </>
    )
};

export default Greet;

//App.jsx
import Greet from './components/Greet'
function App() {
  return (
    <>
      <Greet name="Bruce" heroName="Batman"> This is children</Greet>
      <Greet name="Clark" heroName="Superman"> <button>Action </button> </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>
  )
}

export default App
```

#### For Class Component

```bash
//Welcome.jsx

import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return(
            <>
                <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
                {this.props.children}
            </>
        )
    }
}

export default Welcome;

//App.jsx will be kinda same
```

### Props Vs State

![alt text](src/assets/PropsVsState.png)

### State

#### State change in Class Component

```bash
//Message.jsx
import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super(); // bcz we extending Component
        this.state = {
            message: 'Welcome Visitor'
        }

    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })

    }
  render() {
    return (
      <div>
       <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Subscribe</button>
      </div>

    )
  }
}

export default Message
```

Note: rconst - for constructor

#### SetState

-   setState is used to update the state in a class component.
-   The component re-renders when the state changes.
-   Never modify the state directly instead use setState to modify

```bash
//Counter.jsx
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)

      this.state = {
         count: 0
      }
    }

   increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=> {console.log('Callback value', this.state.count)})
        // console.log(this.state.count);

        // Using block body with return
        this.setState((prevState) => {
            return { count: prevState.count + 1 };
        });

        // Using implicit return
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));

    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={()=> this.incrementFive()}>Increment</button>
        </div>
    )
  }
}

export default Counter

```

```bash
increment() {
        this.setState({
            count: this.state.count + 1
        }, ()=> {console.log('Callback value', this.state.count)})  //1
        console.log(this.state.count); //0

    }
```

Calls to setState are asynchoronous. `console.log(this.state.count)` being called before the state is actually set.
So inorder to call the function after the setState, can use 2nd parameter of the setState as callback function.

`setState(stateObject, callback)`

![alt text](src/assets/setState.png)

Note:

```bash
this.setState((prevState)=> { return {count: prevState.count + 1} })

this.setState((prevState)=> ({ count: prevState.count + 1 }))

```

Both of these setState calls are functionally equivalent in terms of updating the state. They both use the functional form of setState to ensure that the state update is based on the previous state. The difference lies in the syntax used to return the new state object.

**Using a Block Body with return**

```bash
this.setState((prevState) => {
  return { count: prevState.count + 1 };
});
```

-   **Syntax:** Uses a block body with an explicit return statement.
-   **Use Case:** Useful when you need to perform additional logic before returning the new state.

**Using an Implicit Return**

```bash
this.setState((prevState) => ({
  count: prevState.count + 1
}));
```

-   **Syntax:** Uses an implicit return with parentheses.
-   **Use Case:** More concise and preferred when the new state object is directly derived from the previous state without additional logic.

### Destructuring Prop and State

#### 1. Destructuring Parameters - Function Comp

```bash
const Greet = ({name, heroName, children}) => {
    console.log(props);
    return(
        <>
            <h1>Hello, {name} a.k.a {heroName}</h1>
            {children}
        </>
    )
};

```

#### 2. Destructuring in the function body - Function Comp

```bash
const Greet = (props) => {
    const { name, heroName } = props;
    return(
        <>
            <h1>Hello, {name} a.k.a {heroName}</h1>
        </>
    )
};

```

#### Destructuring in the function body - Class Comp

```bash
class Welcome extends Component{
    render(){
        const {name, heroName} = this.props;
        //const {state1, state2} = this.state;
        return(
            <>
                <h1>Welcome {name} a.k.a {heroName}</h1>
            </>
        )
    }
}
```

### Event Handling

For Function

-   onClick={clickHandler()} if you call like this, it will call when start and not when clicked

```bash
//FunctionClick.jsx
function FunctionClick() {
    function clickHandler() {
        console.log("Button Clicked");
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}

```

For Class

```bash
//ClassClick.jsx
class ClassClick extends Component {
    clickHandler() {
        console.log("Button Clicked");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        );
    }
}

```

### Event Binding

**M1 - Binding in render method** - performance implications

**M2 - Arrow function in render method** - Still viable optiom=n

```bash
class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello",
        };
    }

    clickHandler() {
        this.setState({
            message: "Goodbye",
        });
        console.log(this);
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                //M1
                <button onClick={this.clickHandler.bind(this)}>Click</button>

                //M2
                <button onClick={()=> this.clickHandler()}>Click</button>
            </div>
        );
    }
}
```

**M3 - Binding in the class constructor** - Recommended

-   Since binding happens once in the constructor, this is good compared to M1 and M2 performance wise.

```bash
class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello",
        };
    }

    clickHandler() {
        this.setState({
            message: "Goodbye",
        });
        console.log(this);
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}
```

**M4 - Use An arrow function as a class property** - This seems also okay

```bash
class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello",
        };
    }


    clickHandler = () => {
        this.setState({
            message: "Goodbye",
        });
    };

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}
```

### Method as Props

Actual idea is we need render parentComponent in App.jsx and ParentComponent will return ChildComponent, when we click(button) that child
component, it need to get the alert message from parentComponent.

```bash
//App.jsx
   return (
        <>
            <ParentComponent />


//ParentComponent.jsx
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentName: "Parent",
        };

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent() {
        alert(`This is from ${this.state.parentName}`);
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        );
    }
}

export default ParentComponent;

//ChildComponent.jsx
function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={() => props.greetHandler()}>Greet Parent</button> */}
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    );
}

export default ChildComponent;

```

### Conditional Rendering

1. if/else
2. Element variables
3. Ternary conditional operator
4. Short circuit operator

#### Using if/else - Not recommended

```bash
class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }
    render() {
        if (this.state.isLoggedIn) {
            return <div>Welcome Aashik</div>;
        } else {
            return <div>Welcome Guest</div>;
        }
    }
}
```

#### Using element variables

```bash
class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }
    render() {
        let message;
        if (this.state.isLoggedIn) {
            message = "Welcome Aashik";
        } else {
            message = "Welcome Guest";
        }
        return <div>{message}</div>;
    }
}

```

#### Ternary - Follow most of the time

```bash
class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }
    render() {
        return this.state.isLoggedIn ? (
            <div>Welcome Aashik</div>
        ) : (
            <div>Welcome Guest</div>
        );
    }
}

```

#### Short circuit - 2nd best option

Based on loggedIn status, either render `Welcome, Aashik` or nothing.

```bash
class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
        };
    }
    render() {
        return this.state.isLoggedIn && <div>Welcome Aashik</div>;
    }
}


```

### List Rendering

```bash
function NameList() {
    const names = ["Bruce", "Clark", "Diana"];
    return (
        <div>
            {names.map((name, id) => <h2 key={id}>{name}</h2>)}
        </div>
    );
}

```

if we simplify more,

```bash
function NameList() {
    const names = ["Bruce", "Clark", "Diana"];
    const nameList = names.map((name, id) => <h2 key={id}>{name}</h2>);
    return <div>{nameList}</div>;
}

```

#### For Objects

```bash
//NameList.jsx

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
        <h2 key={id}>
            I'm {person.name}. I'm {person.age} years old. I know {person.skill}
        </h2>
    ));
    return <div>{personList}</div>;
}

export default NameList;

```

Refactor more,

```bash
//NameList.jsx

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


//Person.jsx
function Person({ person, id }) {
    return (
        <h2 key={id}>
            I'm {person.name}. I'm {person.age} years old. I know {person.skill}
        </h2>
    );
}

```
