import React from 'react';
import logo from '../assets/worth-logo-white-2x.png';
import './App.css';

// import Button from './Button';
// import Input from './Input';
import Login from '../containers/Login';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <p className="App-intro">
      <Login />
    </p>
  </div>
);

export default App;
