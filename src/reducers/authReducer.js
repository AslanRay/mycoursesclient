import { LOGIN } from '../actions/authAction';

const initialState = {
  token: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        token: 'safsdfsdf',
      };
    }
    default: return { ...state };
  }
};

export default authReducer;
