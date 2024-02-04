const OPEN_MODAL = "fanLetters/details/callModals";
const CLOSE_MODAL = "fanLetters/details/closeModals";
const SET_EDIT_CONTENTS = "fanLetters/details/setEditContents";

export const openModal = (content) => {
  return {
    type: OPEN_MODAL,
    payload: {
      content,
      isDivVisible: false,
    },
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
  isModalOpen: false,
  isDivVisible: true,
  editContent: "",
};

const ControlModal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        isDivVisible: action.payload.isDivVisible,
        editContent: action.payload.content,
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

export default ControlModal;
