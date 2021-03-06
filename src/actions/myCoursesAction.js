import { apiCall } from '../utils/utilFunctions';

export const GET_ALL_TRACKED_COURSES = 'GET_ALL_TRACKED_COURSES';
export const GET_COURSES_LIST = 'GET_COURSES_LIST';
export const GET_COURSES_TYPE_LIST = 'GET_COURSES_TYPE_LIST';
export const USER_COURSE_TRACK_EDITED = 'USER_COURSE_TRACK_EDITED';
export const USER_COURSE_TRACK_DELETED = 'USER_COURSE_TRACK_DELETED';
export const SAVE_USER_TRACKED_COURSE = 'SAVE_USER_TRACKED_COURSE';

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

export const saveUserTrackedCourse = (
  userName,
  courseName,
  courseType,
  loggedTime,
) => async (dispatch) => {
  const body = {
    userName,
    courseName,
    courseType,
    loggedTime,
  };
  try {
    await apiCall('userCoursesTracker', { post: body });
    dispatch({
      type: SAVE_USER_TRACKED_COURSE,
      successSave: true,
    });
    getAllTrackedCourses()(dispatch);
  } catch (_) {
    //
  }
};

export const editUserCourseTracked = (
  userCourseTrackedID,
  userName,
  courseName,
  courseType,
  loggedTime,
) => async (dispatch) => {
  const body = {
    userName,
    courseName,
    courseType,
    loggedTime,
  };
  try {
    await apiCall(`userCoursesTracker/${userCourseTrackedID}`, { patch: body });
    dispatch({
      type: USER_COURSE_TRACK_EDITED,
      successEdit: true,
    });
    getAllTrackedCourses()(dispatch);
  } catch (_) {
    //
  }
};

export const deleteUserCourseTracked = (userCourseTrackedID) => async (dispatch) => {
  try {
    await apiCall(`userCoursesTracker/${userCourseTrackedID}`, { delete: {} });
    dispatch({
      type: USER_COURSE_TRACK_DELETED,
      successDelete: true,
    });
    getAllTrackedCourses()(dispatch);
  } catch (_) {
    //
  }
};
