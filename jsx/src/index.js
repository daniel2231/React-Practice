// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = {text: "Click Me"};
    const labelText = 'Enter name:'

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
        </div>
            <button style={{backgroundColor: "blue", color: "white"}}>{buttonText.text}</button>  
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)