import * as types from './types';

// export const authUser = response => ({
//   type: types.AUTH_USER,
//   response,
// });

export const authUser = (response) => {
  return (dispatch) => {
    dispatch({ type: types.AUTH_USER, response });
    console.log(response);
    localStorage.setItem('token', response.accessToken);
  };
};

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});
