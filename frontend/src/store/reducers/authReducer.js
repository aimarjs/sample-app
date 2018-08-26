import * as types from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          name: action.response.profileObj.name,
          email: action.response.profileObj.email,
          googleId: action.response.profileObj.googleId,
          imageUrl: action.response.profileObj.imageUrl,
        },
        token: action.response.accessToken,
      };
    case types.LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default reducer;
