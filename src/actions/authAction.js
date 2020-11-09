import { apiCall } from '../utils/utilFunctions';

export const LOGIN = 'LOGIN';

export const login = (email, password) => {
  const body = { email, password };

  return async (dispatch) => {
    try {
      const response = await apiCall('login', {
        post: body,
        login,
      });
      const data = await response.json();
      console.log('data', data);
    } catch (_) {
      //
    }
    dispatch({ type: LOGIN, token: 'somehting' });
  };
};
