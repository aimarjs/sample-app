import * as types from './types';

export const authUser = response => (dispatch) => {
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
  fetch('http://localhost:4000/api/v1/auth/google', options)
    .then((r) => {
      const token = r.headers.get('x-auth-token');
      r.json().then((user) => {
        if (token) {
          dispatch({ type: types.AUTH_USER, token, user });
          localStorage.setItem('accessToken', token);
        } else {
          alert('ERROR!');
        }
      });
    });
};

// export const checkAuth = token => (dispatch) => {
//   console.log(token);
//   const tokenBlob = new Blob(
//     [JSON.stringify({ access_token: token }, null, 2)],
//     { type: 'application/json' },
//   );
//   const options = {
//     method: 'POST',
//     body: tokenBlob,
//     mode: 'cors',
//     cache: 'default',
//   };
//   fetch('http://localhost:4000/api/v1/auth/google', options)
//     .then((r) => {
//       console.log(r);
//       const accessToken = r.headers.get('x-auth-token');
//       r.json().then((user) => {
//         if (accessToken) {
//           dispatch({ type: types.CHECK_AUTH, token, user });
//           localStorage.setItem('accessToken', token);
//         } else {
//           alert('ERROR!');
//         }
//       });
//     });
// };

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});
