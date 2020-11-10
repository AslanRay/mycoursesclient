import { combineReducers } from 'redux';
import authReducer from './authReducer';
import myCoursesReducer from './myCoursesReducer';

const rootReducer = combineReducers({
  authReducer,
  myCoursesReducer,
});

export default rootReducer;
