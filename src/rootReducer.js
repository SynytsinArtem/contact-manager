import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import contacts from './features/Contacts/reducer';
import modal from './features/Modal/reducer';

export default combineReducers({
  contacts,
  modal,
  form: formReducer,
});
