import { LOGIN, LOGOUT } from '../actions/authAction';

const initialState = {
  token: '',
  userName: '',
  isLoged: false,
  userID: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        token: action.token,
        userName: action.userName,
        isLoged: true,
        userID: action.userID,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        token: action.token,
        userName: action.userName,
        isLoged: false,
        userID: action.userID,
      };
    }
    default: return { ...state };
  }
};

export default authReducer;
