import { combineReducers } from "redux";
import logReducer from "./logReducer";
import devReducer from "./devReducer";

export default combineReducers({
  log: logReducer,
  dev: devReducer,
});
