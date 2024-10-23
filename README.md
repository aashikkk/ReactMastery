# React Mastery

## Table of Contents

- [React Mastery](#react-mastery)
  - [Table of Contents](#table-of-contents)
  - [PreReq](#pre-requisites)
  - [Installation](#installation)
  - [Components](#component)


## Pre Requisites
![PreReq](src/assets/PreReq.png)

## Content
- Fundamentals
- HTTP
- Routing
- Redux
- Utilities

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

- Components describe a part of the UI
- They are reusable and can be nested inside other components
- Two Types
    - Statless Functional Components
    - Stateful Class Components

### Functional Components

Functional components are a simpler way to write components that only contain a render method and don't have their own state. They are JavaScript functions that accept props as an argument and return React elements.

Key Points
- Functional components are stateless.
- They are easier to read and test.
- They can use hooks to manage state and side effects.