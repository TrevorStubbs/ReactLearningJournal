import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // Not required by React
  constructor(props){
    super(props);

    // Only allowed to make a direct assignment of a var in an object is here in the constructor 
    this.state = { 
      lat: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // must call setState!!!!
        // state is an object!!!
        // Never make a direct assignment to an object
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React requires that render must be called.
  render() {
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat){
      return <div>Latitude: {this.state.lat}</div>;
    } 

    return <div>Loading!</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
