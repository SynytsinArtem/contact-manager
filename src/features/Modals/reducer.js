import { SHOW_MODAL, HIDE_MODAL } from './types';

const initialState = {
  modalType: '',
  modalProps: {},
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return {
        modalType: payload.modalType,
        modalProps: payload.modalProps,
      };

    case HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
};

export default modalReducer;
