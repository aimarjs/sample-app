import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
  rootReducer,
  composeEnhancers,
);

export default store;
