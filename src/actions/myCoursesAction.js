import { apiCall } from '../utils/utilFunctions';

export const GET_ALL_TRACKED_COURSES = 'GET_ALL_TRACKED_COURSES';

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
