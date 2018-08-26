import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

import logo from '../assets/worth-logo-white-2x.png';
import './App.css';

// import Button from './Button';
// import Input from './Input';
import Login from '../containers/Login';

class App extends Component {
  componentDidMount() {
    // const token = localStorage.getItem('accessToken');
    // this.props.onCheckAuth(token);
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

const mapDispatchToProps = dispatch => ({
  // onCheckAuth: response => dispatch(actions.checkAuth(response)),
});

export default connect(null, mapDispatchToProps)(App);
