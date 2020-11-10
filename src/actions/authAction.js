import { apiCall, setSessionStorage, removeSessionStorage } from '../utils/utilFunctions';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

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
        userID: user.id,
      });
      setSessionStorage({ data: token, key: 'sessionToken' });
    } catch (_) {
      //
    }
  };
};

export const logout = () => (dispatch) => {
    removeSessionStorage('sessionToken');
    dispatch({
      type: LOGOUT,
      token: '',
      userName: '',
      userID: '',
    });
  };
