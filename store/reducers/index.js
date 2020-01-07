import { combineReducers } from "redux";
import usersReducer from "./users-reducer";
import reposReducer from "./repositories-reducer";
import listReducer from "./list-reducer";

export default combineReducers({
  usersReducer,
  reposReducer,
  listReducer
});
