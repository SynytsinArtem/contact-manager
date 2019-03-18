import { toast } from 'react-toastify';

import * as types from './types';

const requestStart = () => ({
  type: types.REQUEST_START,
});

const requestCompleted = () => ({
  type: types.REQUEST_COMPLETED,
});

const getContactsSuccess = payload => ({
  type: types.GET_CONTACTS_SUCCESS,
  payload,
});

export const receiveContactsThunk = (page, limit, searchValue = '', searchBy) => (dispatch, state, api) => {
  dispatch(requestStart());

  const searchParams = {
    key: searchBy ? `${searchBy}_like=` : '',
    value: searchValue,
  };

  return api(`contacts?_sort=name&_order=asc&_page=${page}&_limit=${limit}&${searchParams.key}${searchParams.value}`)
    .then((response) => {
      const contactListLength = Number(response.headers['x-total-count']);
      const contactList = response.data;

      dispatch(getContactsSuccess({ contactListLength, contactList }));
    })
    .catch((error) => {
      toast.error(error.message);
      dispatch(requestCompleted());
    });
};

export const addNewContactThunk = contact => (dispatch, state, api) => {
  dispatch(requestStart());

  return api('contacts', 'post', contact)
    .then((response) => {
      toast.success(`${response.data.name} successfully created`);
    })
    .catch((error) => {
      toast.error(error.message);
      dispatch(requestCompleted());
    });
};

export const editContactThunk = contact => (dispatch, state, api) => {
  dispatch(requestStart());

  return api(`contacts/${contact.id}`, 'put', contact)
    .then((response) => {
      toast.success(`${response.data.name} successfully edited`);
    })
    .catch((error) => {
      toast.error(error.message);
      dispatch(requestCompleted());
    });
};

export const removeContactThunk = (id, name) => (dispatch, state, api) => {
  dispatch(requestStart());

  return api(`contacts/${id}`, 'delete')
    .then(() => {
      toast.success(`Contact ${name} successfully removed`);
    })
    .catch((error) => {
      toast.error(error.message);
      dispatch(requestCompleted());
    });
};
