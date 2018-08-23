import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import config from "../../config";

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
    console.log(response);
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: response.accessToken }, null, 2)],
      { type: 'application/json' },
    );
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default',
    };
    fetch('http://localhost:4000/api/v1/auth/google', options).then((r) => {
      const token = r.headers.get('x-auth-token');
      r.json().then((user) => {
        if (token) {
          this.setState({ isAuthenticated: true, user, token });
        } else {
          alert('ERROR!');
        }
      });
    });
  };

  onFailure = error => {
    alert(error);
  };

  render() {
    const { isAuthenticated } = this.state;

    const content = isAuthenticated ? (
      <div>Authenticated!</div>
    ) : (
      <GoogleLogin
        clientId={config.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={this.googleResponse}
        onFailure={this.onFailure}
      />
    );

    console.log(this.state);
    return content;
  }
}

export default Login;
