import {
  emailValidateRegexp,
  inputValueMaxLength,
  phoneValidateRegexp, urlValidateRegexp,
} from '../../constants/constants';
import { validateValueLength } from '../Contacts/utils';

const validate = ({
  firstName,
  lastName,
  phone,
  email,
  imageURL,
}) => {
  const errors = {};
  const maxValueLengthError = `Value length should be no more than ${inputValueMaxLength} characters`;

  if (!firstName || firstName.trim() === '') {
    errors.firstName = 'First name is required';
  }

  if (firstName && !validateValueLength(firstName, inputValueMaxLength)) {
    errors.firstName = maxValueLengthError;
  }

  if (email && !emailValidateRegexp.test(email)) {
    errors.email = 'email should be valid';
  }

  if (email && !validateValueLength(email, inputValueMaxLength)) {
    errors.email = maxValueLengthError;
  }

  if (!lastName || lastName.trim() === '') {
    errors.lastName = 'Last name is required';
  }

  if (lastName && !validateValueLength(lastName, inputValueMaxLength)) {
    errors.lastName = maxValueLengthError;
  }

  if (!phone || phone.trim() === '') {
    errors.phone = 'Phone number is required';
  }

  if (phone && !phoneValidateRegexp.test(phone)) {
    errors.phone = 'Phone number should be valid';
  }

  if (phone && !validateValueLength(phone, inputValueMaxLength)) {
    errors.phone = maxValueLengthError;
  }

  if (imageURL && !urlValidateRegexp.test(imageURL)) {
    errors.imageURL = 'URL should be valid';
  }

  return errors;
};

export default validate;
