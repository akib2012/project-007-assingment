1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension of JavaScript that looks like HTML but is actually converted into JavaScript code. In React, JSX is used to describe how the user interface (UI) should appear. It allows us to write HTML-like code inside JavaScript and also insert dynamic data using {}.

Why JSX is used:
a. Makes the code easy to read and understand.
b. Helps in creat and structur React components more clearly.
c. Allows combining HTML and JavaScript together.
d. developer friendly.


2. What is the difference between State and Props?

Props : 

a. Props Used for making components reusable with different values.
b. used to pass data from a parent component to a child component.
c. They are read-only.

State:

a. state is mutable.
b. used to store and manage data within a component itself.
c. Used for handling data that changes over time.

3. What is the useState hook, and how does it work?

useState Hook is a special function in React that allows functional components to create and manage state. Before hooks, state was only available in class components, but useState makes it possible in functional components.

How it works:

a. The current state value.
b. A function to update that state.


4. How can you share state between components in React?

a. Lift State Up
b. Use Context API
c. Use State Management Libraries

5. How is event handling done in React?

CamelCase syntax:

 Event names are written in camelCase instead of lowercase.

Example: onClick (React) vs onclick (HTML).

 JSX functions instead of strings:

In React, you pass a function as the event handler, not a string.

Synthetic Events:

 React uses a wrapper called SyntheticEvent, which works the same across all browsers for consistent behavior.  