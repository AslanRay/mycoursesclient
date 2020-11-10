import { LOGIN } from '../actions/authAction';

const initialState = {
  token: '',
  userName: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        token: action.token,
        userName: action.userName,
      };
    }
    default: return { ...state };
  }
};

export default authReducer;
