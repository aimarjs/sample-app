import * as types from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        accessToken: action.token,
      };
    case types.CHECK_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        accessToken: action.token,
      };
    case types.GET_USER:
      return {
        ...state,
        user: {
          name: action.response.profileObj.name,
          email: action.response.profileObj.email,
          googleId: action.response.profileObj.googleId,
          imageUrl: action.response.profileObj.imageUrl,
        },
      };
    case types.LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default reducer;
