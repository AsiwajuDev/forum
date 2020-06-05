import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import errorReducer from "./errorReducer/errorReducer";
import profileReducer from "./profileReducer/profileReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
});
