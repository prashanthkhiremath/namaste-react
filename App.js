import React from "react";
import ReactDOM from "react-dom/client";


// JSX - HTML like or XML like syntax.
// JSX (traspiled before it reaches the JS) - PARCEL - Babel

const elem = <span> React Element</span>;

const Title = () =>  (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX
    </h1>
)

// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title/>
        <Title></Title>
        <h1>Namaste React Function Component</h1>
    </div>
); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);