import {
  GET_ALL_TRACKED_COURSES,
  GET_COURSES_LIST,
  GET_COURSES_TYPE_LIST,
  USER_COURSE_TRACK_EDITED,
} from '../actions/myCoursesAction';

const initialState = {
  usersCoursesTracked: [],
  coursesList: [],
  courseTypesList: [],
  successEdit: false,
};

const myCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRACKED_COURSES: {
      return {
        ...state,
        usersCoursesTracked: action.usersCoursesTracked,
      };
    }
    case GET_COURSES_LIST: {
      return {
        ...state,
        coursesList: action.coursesList,
      };
    }
    case GET_COURSES_TYPE_LIST: {
      return {
        ...state,
        courseTypesList: action.courseTypesList,
      };
    }
    case USER_COURSE_TRACK_EDITED: {
      return {
        ...state,
        successEdit: action.successEdit,
      };
    }
    default: return { ...state };
  }
};

export default myCoursesReducer;
