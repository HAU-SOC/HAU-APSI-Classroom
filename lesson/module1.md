<div align="center">
  <h1> Getting Started with ReactJS and JSX</h1>
 
</div>

# Requirements

## Development Environment Setup

Professional development requires a specific toolchain to ensure consistency and efficiency.

## Prerequisites Checklist

### Software Installation:
1. Web Browser: Google Chrome (essential for its robust Developer Tools and React DevTools extension).
2. Code Editor: Visual Studio Code (VS Code).
3. Node.js: Required for modern build tools like Vite (Version 18+).

### Fundamental Knowledge:
1. JavaScript Basics: Variables (const/let), Arrow Functions, and the .map() method.
2. HTML/CSS Basics: Basic tag structure and CSS class selectors.

### VS Code Extensions:
1. Live Server: Used initially for simple HTML files.
2. ESLint: Critical for catching syntax errors and enforcing best practices in real-time.

This section covers prerequisites to get started with React. You should have a good understanding of the following technologies:

- HTML
- CSS
- JavaScript

# Setup
# What is React?

React is an open-source JavaScript library for building dynamic and interactive user interfaces(UIs). React is developed and released by Facebook. Facebook is continuously working on the React library and enhancing it by fixing bugs and introducing new features.

To summarize:

- React was released in May 2013
- React was created by Facebook
- React is a JavaScript library for building user interfaces
- React is used to build single page applications - An application which has only one HTML page.
- React allows us to create reusable UI components
- React latest release 
- [React versions](https://reactjs.org/versions/)
- React official documentation can be found [here](https://reactjs.org/docs/getting-started.html)


## Why React?

Here is exactly why developers, startups, and tech giants choose React.

### Core Technical Advantages

1. Component-Based Architecture: UI is broken down into small, isolated Lego-like pieces called components. You write a component once (like a button or navigation bar) and reuse it across your entire application, significantly speeding up development.

2. The Virtual DOM: Standard JavaScript updates the entire web page layout when data changes, which causes lagging. React creates a lightweight copy of the page in its memory (the Virtual DOM), isolates exactly what changed, and updates only that specific element.

3. Declarative UI: Instead of writing complex, step-by-step instructions to manipulate the user interface, you simply describe what the UI should look like based on the current state. React automatically updates the view when the data updates.JSX Syntax:

4. React uses JSX (JavaScript XML), allowing you to write HTML structure directly inside your JavaScript code. This keeps your visual layout and logical code perfectly unified and highly readable.

### Business & Career Benefits

1. Massive Job Market: React is highly sought after by employers globally. Learning React opens doors to high-paying development roles and extensive freelance opportunities.
   
3. Backed by Meta: Created and maintained by Meta (formerly Facebook), React is heavily used across their live platforms like Facebook and Instagram. This guarantees the tool remains stable, supported, and continuously updated for years to come.
   
5. Unmatched Ecosystem: Because of its massive community, you can find pre-built solutions, testing libraries, and UI packages for almost any feature you need to build.
   
7. Cross-Platform Efficiency: By learning React, you instantly gain a foundation for mobile development. Using React Native, you can build native iOS and Android apps using the exact same design concepts and code structures


### Why we choose to use React ? 

We use it because of the following reasons:

- fast
- modular
- scalable
- flexible
- big community and popular
- open source
- High job opportunity

# Set Up React

First, make sure you have Node.js installed. You can check by running this in your terminal:

```js node -v ```

If Node.js is installed, you will get a result with the version number:

```js v22.15.0 ```

If not, you will need to install Node.js.

## Install a Build Tool (Vite)

When you have Node.js installed, you can start creating a React application by choosing a build tool.

We will use the Vite build tool in this [tutorial](https://vite.dev/)

Run this command to install Vite:

```js npm install -g create-vite ```

## Create a React Application

Run this command to create a React application named ``` my-react-app ```js:

```js npm create vite@latest my-react-app -- --template react ```

If you get this message, just press y and press Enter to continue:

Need to install the following packages:
```js
create-vite@9.0.7
Ok to proceed? (y)
Next, you might get this message, just press Enter to continue:


> npx
> create-vite my-react-app --template react

|
*  Install with npm and start now?
|  > Yes /   No
-
```

If the creation was a success, you will get a result like this:

```js
VITE v8.0.15 ready in 262 ms

→ Local:    http://localhost:5173/
→ Network: use --host to expose
→ press h + enter to show help
```

A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:5173 in the address bar.

# Your First React App

## Modify the React App
Look in the ``` my-react-app ``` directory, and you will find a ``` src ``` folder. Inside the ``` src ``` folder there is a file called ``` App.jsx```, open it and it will look like this:

Example
This is the default content of the ``` App.jsx ``` file in the ```src``` folder:

```js
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App


```

Try replacing the entire file content with the code below and save the file.


Example
Replace all the content of the ```App.jsx``` file with the code below:
```js
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
```

See the changes in the browser when you click Save.


# JSX
## JSX Basics

### What is JSX?
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

### Coding JSX

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any ```createElement()```  and/or ```appendChild() ``` methods.

JSX converts HTML tags into react elements.

You are not required to use JSX, but JSX makes it easier to write React applications.

Here are two examples. 

The first uses JSX and the second does not:

Example 1 
JSX:
```js
main.jsx
const myElement = <h1>I Love JSX!</h1>;

createRoot(document.getElementById('root')).render(
  myElement
);
```

Example 2
Without JSX:

```js
main.jsx
const myElement = React.createElement('h1', {}, 'I do not use JSX!');

createRoot(document.getElementById('root')).render(
  myElement
);
```

As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.

JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.


### Expressions in JSX
With JSX you can write expressions inside curly braces ``` { } ```.

The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

Example
Execute the expression ``` 5 + 5 ```:

main.jsx
```js
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
```

### Inserting a Large Block of HTML
To write HTML on multiple lines, put the HTML inside parentheses:

Example
Create a list with three list items:

main.jsx
```js
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
```

### One Top Level Element
The HTML code must be wrapped in ONE top level element.

So if you like to write two paragraphs, you must put them inside a parent element, like a div element.

Example
Wrap two paragraphs inside one DIV element:

main.jsx
```js
const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);
```

JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.

A fragment looks like an empty HTML tag: ``` <></> ```.

Example
Wrap two paragraphs inside a fragment:

main.jsx
```js
const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);
```

### Elements Must be Closed
JSX follows XML rules, and therefore HTML elements must be properly closed.

Example
Close empty elements with ``` /> ```

main.jsx
```js
const myElement = <input type="text" />;
```

JSX will throw an error if the HTML is not properly closed.

### Attribute class = className
The ``` class ``` attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the ``` class ``` keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

Use attribute ``` className ``` instead.

JSX solved this by using ``` className ``` instead. When JSX is rendered, it translates ``` className ``` attributes into ``` class ``` attributes.

Example
Use attribute ``` className ``` instead of ``` class ``` in JSX:

main.jsx
```js
const myElement = <h1 className="myclass">Hello World</h1>;
```

### Comments in JSX
Comments in JSX are written with ``` {/* */} ```

Example
Comments in JSX:

main.jsx
```js
const myElement = <h1>Hello {/* Wonderful */} World </h1>;
```

### JSX in React Components
React uses components to build UIs. Components are independent and reusable bits of code.

React components are like JavaScript functions, and return HTML.

JSX works perfect inside React components

Example
JSX in Components:
```js
main.jsx
function Car() {
  return (
    <>
      <h2>My Car</h2>
      <p>It is a Ford Mustang.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
)
```
Inside the components, you can do some other operations before returning the HTML:

Example
JSX in Components:

main.jsx
```js
function Car() {
  const brand = "Ford";
  const model = "Mustang";
  return (
    <>
      <h2>My Car</h2>
      <p>It is a {brand} {model}.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
)

```

## JSX Expressions

One of the most powerful features of JSX is the ability to embed JavaScript expressions directly within your markup.

### Expressions
You can insert any valid JavaScript expression inside JSX by wrapping it in curly braces ``` { } ```.

React will evaluate the expression and render the result in the DOM.

Example
Execute the expression ``` 218 * 1.36 ```:
```js
function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {218 * 1.36} horsepower</p>
    </>
  );
}
```
### Variables
Variables are also valid expressions. Insert variables in JSX by wrapping it in curly braces ```{ } ```.

Example
Use a variable inside JSX:
```js
function Car() {
  const hp = 218 * 1.36;
  return (
    <>
      <h1>My car</h1>
      <p>It has {hp} horsepower</p>
    </>
  );
}
```


### Function Calls
Function calls are valid expressions. Insert function calls in JSX by wrapping it in curly braces { }.

Example
Use a function inside JSX:
```js
function kwtohp(kw) {
  return kw * 1.36;
}

function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {kwtohp(218)} horsepower</p>
    </>
  );
}
```

### Object Properties
Access object properties within JSX:

Example
Refer to an object property inside JSX:
```js
function Car() {
  const myobj = {
    name: "Fiat",
    model: "500",
    color: "white"
  };
  return (
    <>
      <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
    </>
  );
}
```



## JSX Attributes

JSX allows you to insert attributes into HTML elements, but there are a few important differences.

### class = className
The ``` class ``` attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

JSX solved this by using ``` className ``` instead. When JSX is rendered, it translates ``` className ``` attributes into ``` class ``` attributes.

Example
Use attribute ```className``` instead of ```class``` in JSX:
```js
function Car() {
  return (
    <h1 className="myclass">Hello World</h1>
  );
}
```

### Expressions as Attributes
You can also use JavaScript expressions as attribute values. This is very useful for dynamic attributes.

Example
Use JavaScript expressions as attribute values:
```js
function Car() {
  const x = "myclass";
  return (
    <h1 className={x}>Hello World</h1>
  );
}
```
Note that the attribute value is not wrapped in quotes, this is important when using expressions (JavaScript variables) as attribute values. If you use quotes, JSX will treat it as a string literals and not a JavaScript expression.


### camelCase Event Attributes
Event attributes in JSX are written in camelCase.

Example
Use camelCase for event attributes:
```js
function Car() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}
```

### Boolean Attributes
If you pass no value for an attribute, JSX treats it as true. To pass false, you must specify it as an expression.

Example
Boolean true in JSX, this will make the button disabled:
```js
<button onClick={myfunc} disabled>Click me</button>
```

Example
Also true in JSX, this will also make the button disabled:
```js
<button onClick={myfunc} disabled={true}>Click me</button>
```

Example
False in JSX, this will NOT make the button disabled:
```js
<button onClick={myfunc} disabled={false}>Click me</button>
```

### The style Attribute
The style attribute in JSX only accepts a JavaScript object with camelCased CSS property names, rather than a CSS string (as in HTML).

Example
Use the style attribute:
```js
function Car() {
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My car</h1>
    </>
  );
}
```
Notice two things about the example above.

The styles are stored in an object.
Style properties are written in camelCase, e.g. ``` fontSize```, instead of ```font-size```.
This is an important difference between HTML and JSX.



## JSX If Statements

### Conditions - if statements
React supports ``` if ``` statements, but not inside JSX.

To be able to use conditional statements in JSX, you should put the ``` if ``` statements outside of the JSX, or you could use a ternary expression instead:

Option 1:
Write ```if ``` statements outside of the JSX code:

Example
Write "Banana" if ```x``` is less than 10, otherwise "Apple":
```js
function Fruit() {
  const x = 5;
  let y = "Apple";
  if (x < 10) {
    y = "Banana";
  }

  return (
    <h1>{y}</h1>
  );
}
```

Option 2:
Use ternary expressions instead:

Example
Write "Banana" if ```x``` is less than 10, otherwise "Apple":
```js
function Fruit() {
  const x = 5;
  return (
    <h1>{(x) < 10 ? "Banana" : "Apple"}</h1>
  );
}
```
Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.

# Hands-on/ Practice Activity
