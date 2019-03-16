import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field, initialize } from 'redux-form';
import { Message, Form } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import Modal from '../Modal';
import {
  emailValidateRegexp,
  phoneValidateRegexp,
  dateValidateRegexp,
  urlValidateRegexp,
  inputValueMaxLength,
} from '../../../../constants/constants';
import { contactPropType } from '../../../../utils/custom-prop-types';
import { validateValueLength } from '../../../Contacts/utils';

import styles from './styles.module.scss';


class ModalAddContactContainer extends Component {
  componentDidMount() {
    const { initializeForm, contact } = this.props;

    if (contact) {
      initializeForm(contact);
    }
  }

  renderInput = ({ input, meta: { touched, error }, ...custom }) => {
    const hasError = touched && error !== undefined;

    return (
      <>
        <Form.Input
          error={hasError}
          fluid
          {...input}
          {...custom}
        />
        {hasError && (
          <Message
            error
            header="Error"
            content={error}
            visible
          />
        )}
      </>
    );
  };

  onClose = () => {
    const { onClose } = this.props;

    onClose();
  };

  render() {
    const {
      open,
      reset,
      handleSubmit,
      valid,
      pristine,
      onSubmit,
      header,
      dimmer,
    } = this.props;

    return (
      <Modal
        open={open}
        onClose={this.onClose}
        header={header}
        dimmer={dimmer}
      >
        <div>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
          >
            <Field
              className={styles.requiredField}
              component={this.renderInput}
              label="First name"
              name="firstName"
              placeholder="First name"
            />
            <Field
              className={styles.requiredField}
              component={this.renderInput}
              label="Last name"
              name="lastName"
              placeholder="Last name"
            />
            <Field
              component={this.renderInput}
              label="email"
              name="email"
              placeholder="email"
            />
            <Field
              className={styles.requiredField}
              component={this.renderInput}
              label="Phone number"
              name="phone"
              placeholder="Phone number"
            />
            <Field
              component={this.renderInput}
              label="Birthday"
              name="birthday"
              placeholder="MM/DD/YYYY"
            />
            <Field
              component={this.renderInput}
              label="Photo URL"
              name="imageURL"
              placeholder="Photo URL"
            />
            <Form.Group inline>
              <Form.Button
                primary
                disabled={pristine || !valid}
              >
                Submit
              </Form.Button>
              <Form.Button
                disabled={pristine}
                onClick={(event) => {
                  event.preventDefault();
                  reset();
                }}
              >
                Reset
              </Form.Button>
            </Form.Group>
          </Form>
        </div>
      </Modal>
    );
  }
}

ModalAddContactContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initializeForm: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  contact: PropTypes.shape(contactPropType),
  dimmer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
};

ModalAddContactContainer.defaultProps = {
  contact: null,
};

const validate = ({
  firstName,
  lastName,
  phone,
  email,
  birthday,
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

  if (birthday && !dateValidateRegexp.test(birthday)) {
    errors.birthday = 'Date should be in MM/DD/YYYY format';
  }

  if (imageURL && !urlValidateRegexp.test(imageURL)) {
    errors.imageURL = 'URL should be valid';
  }

  if (imageURL && !validateValueLength(imageURL, inputValueMaxLength)) {
    errors.imageURL = maxValueLengthError;
  }

  return errors;
};

const mapDispatchToProps = dispatch => ({
  initializeForm: contact => dispatch(initialize('addContact', contact)),
});

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'addContact',
    validate,
  }),
)(ModalAddContactContainer);