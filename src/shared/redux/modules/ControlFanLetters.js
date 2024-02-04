import initialData from "../../data.json";

const ADD_FAN_LETTERS = "fanLetters/addFanLetters";
const DELETE_FAN_LETTERS = "fanLetters/deleteFanLetters";
const UPDATE_FAN_LETTERS = "fanLetters/updateFanLetters";

export const addLetter = (letter) => {
  return {
    type: ADD_FAN_LETTERS,
    payload: letter,
  };
};

export const deleteLetter = (id) => {
  return {
    type: DELETE_FAN_LETTERS,
    payload: id,
  };
};

export const updateLetter = (update) => {
  return {
    type: UPDATE_FAN_LETTERS,
    payload: update,
  };
};

const initialState = {
  fanLetters: initialData,
};

const ControlFanLetters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAN_LETTERS:
      return { ...state, fanLetters: [...state.fanLetters, action.payload] };
    case DELETE_FAN_LETTERS:
      return {
        ...state,
        fanLetters: state.fanLetters.filter(
          (letter) => letter.id !== action.payload
        ),
      };
    case UPDATE_FAN_LETTERS:
      return {
        ...state,
        fanLetters: state.fanLetters.map((letter) =>
          letter.id === action.payload.id ? action.payload : letter
        ),
      };

    default:
      return state;
  }
};

export default ControlFanLetters;
