import { createStore } from "redux";
import { combineReducers } from "redux";
import ControlFanLetters from "../modules/ControlFanLetters";

const rootReducer = combineReducers({
  ControlFanLetters,
});
const store = createStore(rootReducer);

export default store;
