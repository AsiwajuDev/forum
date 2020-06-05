import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
} from "../types";

//get current profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/profile")
    .then((response) => {
      dispatch({ type: GET_PROFILE, payload: response.data });
    })
    .catch((error) => dispatch({ type: GET_PROFILE, payload: {} }));
};

//profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

//clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};
