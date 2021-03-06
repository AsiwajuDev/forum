import axios from "axios";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "../types";
import setAuthToken from "../../utils/setAuthToken";

//Register User
export const registerUserAction = (userData, history) => (dispatch) => {
  axios
    .post("/users/register", userData)
    .then((response) => history.push("/login"))
    .catch((error) =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      })
    );
};

//Login User
export const loginUserAction = (userData) => (dispatch) => {
  axios
    .post("/users/login", userData)
    .then((response) => {
      //save to local storage
      const { token } = response.data;
      //set token to local storage
      localStorage.setItem("jwtToken", token);
      //set token to Auth header
      setAuthToken(token);
      //deocde token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUserAction(decoded));
    })
    .catch((error) =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      })
    );
};

//set logged in/current user
export const setCurrentUserAction = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//Log user out
export const logoutUserAction = () => (dispatch) => {
  //remove token from local storage
  localStorage.removeItem("jwtToken");
  //remove auth header for feature request
  setAuthToken(false);
  //set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUserAction({}));
};
