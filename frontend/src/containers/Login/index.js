import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import config from '../../config';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: '',
};

class Login extends Component {
  state = initialState;

  logout = () => {
    this.setState(initialState);
  };

  googleResponse = (response) => {
    this.props.onLogin(response)
  };

  onFailure = error => {
    alert(error);
  };

  render() {
    const { isAuthenticated, user } = this.props;

    const content = isAuthenticated ? (
      <div>{user.name}</div>
    ) : (
      <GoogleLogin
        clientId={config.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={this.googleResponse}
        onFailure={this.onFailure}
        hostedDomain="worth.systems"
      />
    );

    // console.log(this.state);
    // console.log(this.props);
    return content;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onLogin: response => dispatch(actions.authUser(response)),
  onLogout: () => dispatch(actions.logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
