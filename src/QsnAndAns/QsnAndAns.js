import React from 'react';

const QsnAndAns = () => {
    return (
        <div>
            <h1>Question and Answer</h1>
            <h3>Q.1: How react Works?</h3>
            <p>Ans: React works in declarative code. One of the biggest advantages of using React that you can infuse HTML code with JS. Users can create a representation of a DOM node by declaring the element function in react. You may have noticed that the syntax of the HTML code above is similar to XML. That said instead of using the traditional DOM class, React uses className. JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JS. In most cases, React is written using JSX instead of standard JS to simple components and keep code clean. A React app usually has a single root DOM node. Rendering an element into the DOM will change the UI of the page. Whenever a React component returns an element, the Virtual DOM will update the real DOM match.</p>
            <h3>Q.2: Difference between props vs state.</h3>
            <p>Ans:(a) The data is passed from one component to another in props. But the data is passed within the component only in sate.</p>
            <p>(b) props is immutable, its cannot be modified. But state is mutable, it can be modified.</p>
            <p>(c) Props can be used with state abd functional components. State can be used only with the state component</p>
            <h3>Q.3: How useState works?</h3>
            <p>Ans: useState is a hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value. </p>
        </div>
    );
};

export default QsnAndAns;