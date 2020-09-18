// import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  return <div>Hi there!</div>;
}


// Render the reactDom
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)