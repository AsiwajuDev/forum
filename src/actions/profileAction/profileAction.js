import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
} from "../types";

//get current profile
export const getCurrentProfileAction = () => (dispatch) => {
  dispatch(setProfileLoadingAction());
  axios
    .get("/profile")
    .then((response) => {
      dispatch({ type: GET_PROFILE, payload: response.data });
    })
    .catch((error) => dispatch({ type: GET_PROFILE, payload: {} }));
};

//create Profile
export const createProfileAction = (profileData, history) => (dispatch) => {
  axios
    .post("/profile", profileData)
    .then((response) => history.push("/dashboard"))
    .catch((error) =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      })
    );
};
//profile loading
export const setProfileLoadingAction = () => {
  return {
    type: PROFILE_LOADING,
  };
};

//clear profile
export const clearCurrentProfileAction = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};
