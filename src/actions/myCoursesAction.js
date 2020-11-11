import { apiCall } from '../utils/utilFunctions';

export const GET_ALL_TRACKED_COURSES = 'GET_ALL_TRACKED_COURSES';
export const GET_COURSES_LIST = 'GET_COURSES_LIST';
export const GET_COURSES_TYPE_LIST = 'GET_COURSES_TYPE_LIST';

export const getAllTrackedCourses = () => async (dispatch) => {
    try {
      const response = await apiCall('userCoursesTracker');
      const data = await response.json();
      dispatch({
        type: GET_ALL_TRACKED_COURSES,
        usersCoursesTracked: data.data,
      });
    } catch (_) {
      //
    }
  };

export const getCoursesList = () => async (dispatch) => {
  try {
    const response = await apiCall('courses');
    const data = await response.json();
    dispatch({
      type: GET_COURSES_LIST,
      coursesList: data.data,
    });
  } catch (_) {
    //
  }
};

export const getCoursesTypeList = () => async (dispatch) => {
  try {
    const response = await apiCall('courseTypes');
    const data = await response.json();
    dispatch({
      type: GET_COURSES_TYPE_LIST,
      courseTypesList: data.data,
    });
  } catch (_) {
    //
  }
};
