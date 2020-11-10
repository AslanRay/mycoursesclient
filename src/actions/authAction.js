import { apiCall, setSessionStorage } from '../utils/utilFunctions';

export const LOGIN = 'LOGIN';

export const login = (email, password) => {
  const body = { email, password };

  return async (dispatch) => {
    try {
      const response = await apiCall('login', { post: body });
      const data = await response.json();
      const { token, user } = data.data;
      dispatch({
        type: LOGIN,
        token,
        userName: user.name,
      });
      setSessionStorage({ data: token, key: 'sessionToken' });
    } catch (_) {
      //
    }
  };
};
