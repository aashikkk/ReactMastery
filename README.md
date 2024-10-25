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
    -   [Styling and CSS Basics](#styling-and-css-basics)
    -   [Basics of Form Handling](#form-handling) // TODO
    -   [Life Cycle Methods](#life-cycle-methods)
    -   [Hooks](#hooks)
        -   [useState](#usestate)
        -   [useEffect](#useEffect)
        -   [useContext](#usecontext)
        -   [useRef](#useRef)
        -   [useReducer](#useReducer)

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
    const personList = persons.map((person) => (
        <Person person={person} key={person.id} />
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

### Keys and List

Keys are a crucial part of React's reconciliation process. They help React identify which items have changed, are added, or are removed. This improves the performance of rendering lists by allowing React to re-render only the changed elements

-   Keys in React are used to identify elements in a list.
-   They help React optimize the rendering process by identifying which items have changed, are added, or are removed.
-   Help in efficient update of the user interface
-   Keys should be unique among siblings and consistent across renders.
-   Using array indices as keys is not recommended if the list can change.
-   Cannot pass prop as key, if we need to pass, need to pass as different name.

![alt text](src/assets/listWOkey.png)

![alt text](src/assets/listWkey.png)

### Index as Key Anti-pattern

Use index as the 2nd parameter of the arrow function.

```bash
function NameList() {
    const names = ["Bruce", "Clark", "Diana"];
    nameList = names.map((name, index) => <h2 key={index}> {index} {name}</h2>);

    return <div>{nameList}</div>;
}

export default NameList;

```

**Disaster in this certain scenarios**

When adding item in the beginning in the list.
![alt text](src/assets/indexasAntiKey.png)

and also the problem when trying to sort the list
![SortByLatestIssue](src/assets/SortByLatestIssue.png)

##### When to use index as a key

1. The items in your list do not have a unique id
2. The list is a static list and will not change
3. The list will never be reordered or filtered

**If not** try these methods

-   Generate a uniqueID using uuid
-   Hashing out the unique id from one of the existing properties

### Styling and CSS Basics

1. CSS Stylesheets
2. Inline styling
3. CSS Modules
4. CSS in JS Libraries (Styled components) - For projects

#### CSS Stylesheets

CSS stylesheets can be used in any child component. However, it might lead to some conflicts due to the global nature of CSS. To avoid conflicts, consider using CSS Modules or styled-components.

**Key Points**

-   **Global Scope:** CSS styles are global by default, which can lead to conflicts if multiple components use the same class names.
-   **CSS Modules:** Consider using CSS Modules to scope CSS locally to the component.
-   **Styled-Components:** Another alternative is to use styled-components for scoped styling.

```css
.primary {
    color: orange;
}

.font-xl {
    font-size: 72px;
}
```

```jsx
function Stylesheet(props) {
    let className = props.primary ? "primary" : "";
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    );
}
```

#### Inline styling

```bash
function Inline() {
    const heading = {
        fontSize: "72px",
        color: "blue",
    };

    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    );
}
```

#### CSS Modules

Available with react-scripts: 2.0 or higher

Naming convention: **name.module.css**
Import convention: `import styles from "path/to/styles"`

Using CSS Modules or styled-components helps to avoid conflicts and keeps styles scoped to the component.

#### CSS in JS Libraries

CSS-in-JS libraries, such as styled-components, allow you to write CSS directly within your JavaScript code. This approach provides several benefits, including scoped styles, dynamic styling, and easier maintenance.

##### Benefits of Styled Components

1. **Scoped Styles**: Styles are scoped to the component, preventing conflicts with other components.
2. **Dynamic Styling**: You can use JavaScript to dynamically change styles based on props or state.
3. **Maintainability**: Styles are colocated with the component, making it easier to maintain and understand the code.
4. **Theming**: Styled-components support theming, allowing you to define a consistent look and feel across your application.

##### Example of Using Styled Components

1. **Install Styled Components**
    ```bash
    npm install styled-components
    ```

```jsx
// Button.jsx
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${(props) => (props.primary ? "blue" : "gray")};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            props.primary ? "darkblue" : "darkgray"};
    }
`;

function Button({ primary, children }) {
    return <StyledButton primary={primary}>{children}</StyledButton>;
}

export default Button;

// App.jsx
import React from 'react';
import Button from './Button';

function App() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </div>
  );
}

export default App;
```

### Form Handling

### Life Cycle Methods

React components have several lifecycle methods that you can override to run code at specific times in the process of a component's life. These methods are divided into three main phases: Mounting, Updating, and Unmounting.

#### Mounting

These methods are called when an instance of a component is being created and inserted into the DOM.

1. **constructor(props)**

    - Called before the component is mounted.
    - Used for initializing state and binding event handlers.

2. **static getDerivedStateFromProps(props, state)**

    - Called right before rendering the element(s) in the DOM.
    - Used to update the state based on props.

3. **render()**

    - The only required method in a class component.
    - Returns the JSX to be rendered.

4. **componentDidMount()**
    - Called after the component is mounted.
    - Used for side effects like fetching data from an API.

#### Updating

These methods are called when a component is being re-rendered as a result of changes to props or state.

1. **static getDerivedStateFromProps(props, state)**

    - Called right before rendering the element(s) in the DOM.
    - Used to update the state based on props.

2. **shouldComponentUpdate(nextProps, nextState)**

    - Called before rendering when new props or state are received.
    - Used to optimize performance by preventing unnecessary re-renders.

3. **render()**

    - Returns the JSX to be rendered.

4. **getSnapshotBeforeUpdate(prevProps, prevState)**

    - Called right before the DOM is updated.
    - Used to capture some information from the DOM before it changes.

5. **componentDidUpdate(prevProps, prevState, snapshot)**
    - Called after the component is updated.
    - Used for side effects like fetching data based on updated props.

#### Unmounting

This method is called when a component is being removed from the DOM.

1. **componentWillUnmount()**
    - Called right before the component is unmounted and destroyed.
    - Used for cleanup like cancelling network requests or removing event listeners.

### Example of Lifecycle Methods

```javascript
import React, { Component } from "react";

class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
        console.log("Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
        // Simulate a data fetch
        setTimeout(() => {
            this.setState({ data: "Fetched Data" });
        }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("Render");
        return <div>{this.state.data ? this.state.data : "Loading..."}</div>;
    }
}

export default LifeCycleDemo;
```

**Key Points**

-   **Mounting:** Methods called when a component is created and inserted into the DOM.
-   **Updating:** Methods called when a component is re-rendered due to changes in props or state.
-   **Unmounting:** Method called when a component is removed from the DOM.

## Hooks

React features without having to write a class. will not working in class

1. useState
2. useEffect
3. useContext
4. useRef
5. useReducer
6. useCallback
7. useMemo

#### Why Hooks

![alt text](src/assets/whyHooks.png)
![alt text](src/assets/whyHooks2.png)
![alt text](src/assets/whyHooks3.png)

![alt text](src/assets/HooksPoints.png)
![alt text](src/assets/HooksSummary.png)

### useState

The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

useState accepts an initial state and returns two values:

-   The current state.
-   A function that updates the state.

Notice that again, we are destructuring the returned values from useState.

The first value, color, is our current state.

The second value, setColor, is the function that is used to update our state.

Lastly, we set the initial state to an empty string: useState("")

```jsx
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
```

The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

We could create multiple state Hooks to track individual values

```jsx
function Car() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");
    return (
        <div>
            <h1>My {brand}</h1>
            <p>
                It is a {color} {model} from {year}
            </p>
        </div>
    );
}

export default Car;
```

Or, we can just use one state and include an object instead!

```jsx
function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
    });
    // const { brand, model, year, color } = car; // No need to use car.brand
    return (
        <div>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}
            </p>
        </div>
    );
}
```

#### Updating Objects and Arrays in State

When state is updated, the entire state gets overwritten.
What if we only want to update the color of our car?

If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.

We can use the JavaScript spread operator to help us.

```jsx
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
```

Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.
We then return an object, spreading the previousState and overwriting only the color.

### useEffect

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

`useEffect` accepts two arguments. The second argument is optional.

`useEffect(<function>, <dependency>)`

```jsx
import React, { useEffect, useState } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });
    return (
        <div>
            <h1>I've rendered {count} times!</h1>
        </div>
    );
}
```

But wait!! It keeps counting even though it should only count once!

useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

This is not what we want. There are several ways to control when side effects run.

We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

```jsx
import React, { useEffect, useState } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);
    return (
        <div>
            <h1>I've rendered {count} times!</h1>
        </div>
    );
}
```

1. No dependency passed:

```js
useEffect(() => {
    //Runs on every render
});
```

2. An empty array:

```js
useEffect(() => {
    //Runs only on the first render
}, []);
```

3. Props or state values:

```js
useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
}, [prop, state]);
```

Ex: **useEffect Hook that is dependent on a variable**. If the count variable updates, the effect will run again:

```js
function CounterUE() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </div>
    );
}
```

If there are multiple dependencies, they should be included in the useEffect dependency array.

#### Effect Cleanup

Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.

```js
function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <h1>I've rendered {count} times!</h1>
        </div>
    );
}
```

**Note:** To clear the timer, we had to name it.

### useContext

React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

**The Problem**
State should be held by the highest parent component in the stack that requires access to the state.

To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

![alt text](src/assets/useContextPropDrilling.png)

Using props drilling.

```jsx
import React, { useState } from "react";

function Component1() {
    const [user, setUser] = useState("Aashik Shihaab");
    return (
        <div>
            <h1>{`Hello ${user}`}</h1>
            <Component2 user={user} />
        </div>
    );
}

function Component2({ user }) {
    // // Destructuring the user prop directly in the function parameter list
    return (
        <div>
            <h1>Component 2</h1>
            <Component3 user={user} />
        </div>
    );
}

function Component3({ user }) {
    return (
        <div>
            <h1>Component 3</h1>
            <Component4 user={user} />
        </div>
    );
}

function Component4({ user }) {
    return (
        <div>
            <h1>Component 4</h1>
            <Component5 user={user} />
        </div>
    );
}

function Component5({ user }) {
    return (
        <div>
            <h1>Component 5 </h1>
            <h2>{`Hello ${user} again`}</h2>
        </div>
    );
}

export default Component1;
```

Context provide a way to pass data through the component tree without having to pass props down manually at every level.

**The solution Using context.**

The solution is to create context.

**Create Context**
To create context, you must Import createContext and initialize it:

```javascript
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();
```

Next we'll use the Context Provider to wrap the tree of components that need the state Context.

**Context Provider**
Wrap child components in the Context Provider and supply the state value.

```jsx
function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </UserContext.Provider>
    );
}
```

Now, all components in this tree will have access to the user Context.

**Use the useContext Hook**
In order to use the Context in a child component, we need to access it using the useContext Hook.

First, include the useContext in the import statement:
`import { useState, createContext, useContext } from "react";`

Then you can access the user Context in all components:

```jsx
function Component5() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}
```

```jsx
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
```

**Old Method using Context without Hook**

Will be problematic if we use multiple contexts and this is ugly.

```jsx
import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

function Component1() {
    const [user, setUser] = useState("Aashik Shihaab");
    return (
        <UserContext.Provider value={user}>
            <div>
                <h1>{`Hello ${user}`}</h1>
                <Component2 />
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
    return (
        <div>
            <UserContext.Consumer>
                <h1>Component 5</h1>
                {(user) => {
                    return <h2>{`Hello ${user}`}</h2>;
                }}
            </UserContext.Consumer>
        </div>
    );
}

export default Component1;
```

### useRef

The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

#### Does Not Cause Re-renders

If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.

```jsx
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
```

useRef() only returns one item. It returns an Object called current.

When we initialize useRef we set the initial value: useRef(0).

#### Accessing DOM Elements

In general, we want to let React handle all DOM manipulation.

But there are some instances where useRef can be used without causing issues.

In React, we can add a ref attribute to an element to access it directly in the DOM.

When we click the button it will turn the focus to input element

```jsx
import React, { useRef } from "react";

function AccessDOMFocus() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };
    return (
        <div>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

export default AccessDOMFocus;
```

#### Tracking State Changes

The useRef Hook can also be used to keep track of previous state values.

This is because we are able to persist useRef values between renders.

```jsx
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
```

This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.

In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.

### useReducer

![alt text](src/assets/useReducer.png)
![alt text](src/assets/HooksSoFar.png)
![alt text](src/assets/reduceVsuseReducer.png)
![alt text](src/assets/useReducerSummary.png)

Step 1: Write useReducer(reducer,initialState)
Step 2: Define the initial state
Step 3: Define the reducer function (state,action)
Step 4: return the values for useReducer (newState, dispatch) with the define of useReducer(reducer, initialState)

-   In reducer function, where we define the actions as switch case and what is going to do with current state.
-   dispatch - execute the action
-   action has two values -> type, value

**Simple state and action**

```jsx
import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function Counter1() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    );
}

export default Counter1;
```

**Complex state and action like redux**

Here we are maintaining state and action as Objects.

```jsx
import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { firstCounter: state.firstCounter + 1 };
        case "decrement":
            return { firstCounter: state.firstCounter - 1 };
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Count: {count.firstCounter}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}

export default Counter2;
```

What is the use when we change like this complex?

Yes, we can have multiple buttons like incrementing/decrementing with different values

```jsx
const initialState = {
    firstCounter: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { firstCounter: state.firstCounter + action.value };
        case "decrement":
            return { firstCounter: state.firstCounter - action.value };
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Count: {count.firstCounter}</h2>
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>
                Increment 5
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
                Decrement 5
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}
```

**We can have multiple counters as well.**

```jsx
const initialState = {
    firstCounter: 0,
    secondCounter: 10,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                firstCounter: state.firstCounter + action.value,
            };
        case "decrement":
            return {
                ...state,
                firstCounter: state.firstCounter - action.value,
            };
        case "increment2":
            return {
                ...state,
                secondCounter: state.secondCounter + action.value,
            };
        case "decrement2":
            return {
                ...state,
                secondCounter: state.secondCounter - action.value,
            };
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function Counter2() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>First Count: {count.firstCounter}</h2>
            <h2>Second Count: {count.secondCounter}</h2>
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>
                Increment 5
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
                Decrement 5
            </button>
            <div>
                <button
                    onClick={() => dispatch({ type: "increment2", value: 1 })}
                >
                    Increment Counter 2
                </button>
                <button
                    onClick={() => dispatch({ type: "decrement2", value: 1 })}
                >
                    Decrement Counter 2
                </button>
            </div>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}
```
