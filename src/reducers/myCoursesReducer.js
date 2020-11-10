import { GET_ALL_TRACKED_COURSES } from '../actions/myCoursesAction';

const initialState = {
  usersCoursesTracked: [],
};

const myCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRACKED_COURSES: {
      return {
        ...state,
        usersCoursesTracked: action.usersCoursesTracked,
      };
    }
    default: return { ...state };
  }
};

export default myCoursesReducer;
