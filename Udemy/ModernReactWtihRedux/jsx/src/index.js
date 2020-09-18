// import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = { text: 'Click me'};
  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text"/>
      <button style={{ 
        backgroundColor:'blue', 
        color: 'white'
      }}>{buttonText.text}</button>
    </div>
  );
}

// Render the reactDom
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)