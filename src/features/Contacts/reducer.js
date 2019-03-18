import * as types from './types';

const initialState = {
  contactList: [],
  contactListLength: null,
  loading: false,
};

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_START:
      return {
        ...state,
        loading: true,
      };

    case types.REQUEST_COMPLETED:
      return {
        ...state,
        loading: false,
      };

    case types.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contactList: payload.contactList,
        contactListLength: payload.contactListLength,
        loading: false,
      };

    case types.ADD_NEW_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default contactsReducer;
