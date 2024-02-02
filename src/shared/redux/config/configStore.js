import { createStore } from "redux";
import { combineReducers } from "redux";
import ControlFanLetters from "../modules/ControlFanLetters";
import ControlModal from "../modules/ControlModal";

const rootReducer = combineReducers({
  ControlFanLetters,
  ControlModal,
});
const store = createStore(rootReducer);

export default store;
