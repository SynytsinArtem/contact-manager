import { combineReducers } from 'redux';

import contacts from './features/Contacts/reducer';
import modal from './features/Modals/reducer';

export default combineReducers({
  contacts,
  modal,
});
