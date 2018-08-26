import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
// import * as actions from './store/actions';
import App from './components/App';
import store from './store/configStore';
// import registerServiceWorker from './registerServiceWorker';

// const token = localStorage.getItem('accessToken');
//
// if (token) {
//   store.dispatch({ type: 'CHECK_AUTH', token });
// }

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(application, document.getElementById('root'));
// registerServiceWorker();
