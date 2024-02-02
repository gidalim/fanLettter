import initialData from "../../data.json";

const ADD_FAN_LETTERS = "fanLetters/addFanLetters";
const DELETE_FAN_LETTERS = "fanLetters/deleteFanLetters";
const UPDATE_FAN_LETTERS = "fanLetters/updateFanLetters";
const CALL_MODAL = "fanLetters/details/callModals";
const CLOSE_MODAL = "fanLetters/details/closeModals";
const SET_EDIT_CONTENTS = "fanLetters/details/setEditContents";

export const addLetter = (payload) => {
  return {
    type: ADD_FAN_LETTERS,
    payload: payload,
  };
};

export const deleteLetter = (id) => {
  return {
    type: DELETE_FAN_LETTERS,
    payload: id,
  };
};

export const updateLetter = (updatedFanLetter) => {
  return {
    type: UPDATE_FAN_LETTERS,
    payload: updatedFanLetter,
  };
};

export const callModal = (content) => {
  return {
    type: CALL_MODAL,
    payload: { content, isDivVisible: false },
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    payload: { isDivVisible: true },
    editContent: "",
  };
};

export const setEditContents = (content) => {
  return {
    type: SET_EDIT_CONTENTS,
    payload: content,
  };
};

const initialState = {
  fanLetters: initialData,
  isModalOpen: false,
  editContent: "",
  isDivVisible: true,
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
    case CALL_MODAL:
      return {
        ...state,
        isModalOpen: true,
        editContent: action.payload.content,
        isDivVisible: action.payload.isDivVisible,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        isDivVisible: action.payload.isDivVisible,
        editContent: action.payload.editContent,
      };
    case SET_EDIT_CONTENTS:
      return {
        ...state,
        editContent: action.payload,
      };

    default:
      return state;
  }
};

export default ControlFanLetters;
