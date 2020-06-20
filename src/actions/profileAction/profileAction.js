import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
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

//add Experience
export const addExperienceAction = (experienceData, history) => (dispatch) => {
  axios
    .post("/profile/experience", experienceData)
    .then((response) => history.push("/dashboard"))
    .catch((error) =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      })
    );
};

//add Education
export const addEducationAction = (educationData, history) => (dispatch) => {
  axios
    .post("/profile/education", educationData)
    .then((response) => history.push("/dashboard"))
    .catch((error) =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      })
    );
};

//delete Experience
export const deleteExperienceAction = (id) => (dispatch) => {
  axios
    .delete(`/profile/experience/${id}`)
    .then((response) =>
      dispatch({
        type: GET_PROFILE,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      })
    );
};

//delete account & profile
export const deleteProfileAction = () => (dispatch) => {
  if (window.confirm("Are you sure? This cannot be undone")) {
    axios
      .delete("/profile")
      .then((response) =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch((error) =>
        dispatch({
          type: GET_ERRORS,
          payload: error.response.data,
        })
      );
  }
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
