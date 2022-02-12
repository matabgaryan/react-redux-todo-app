import { combineReducers } from "redux";
import todos from "./todos";

const rootReducer: any = combineReducers({
  todos
});

export default rootReducer;
