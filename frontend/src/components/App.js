import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/worth-logo-white-2x.png';
import './App.css';

// import Button from './Button';
// import Input from './Input';
import Login from '../containers/Login';

class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <Login />
        </div>
      </div>
    );
  }
}

// const App = () => (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//     </header>
//     <div className="App-intro">
//       <Login />
//     </div>
//   </div>
// );

export default App;
