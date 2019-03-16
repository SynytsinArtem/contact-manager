import PropTypes from 'prop-types';

export const contactPropType = {
  name: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  birthday: PropTypes.string,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string,
  id: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
};

export const callHistoryPropType = {
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};
