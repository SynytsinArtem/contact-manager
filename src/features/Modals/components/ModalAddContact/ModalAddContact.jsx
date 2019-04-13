import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message, Form as FormUI } from 'semantic-ui-react';
import { Form, Field } from 'react-final-form';
import DatePicker from 'react-datepicker';

import Modal from '../Modal';
import validate from '../../utils';
import { contactPropType } from '../../../../utils/custom-prop-types';

import styles from './styles.module.scss';

class ModalAddContactContainer extends Component {
  state = {
    birthday: null,
  };

  componentDidMount() {
    const { contact } = this.props;

    if (contact) {
      this.setState({
        birthday: new Date(contact.birthday),
      });
    }
  }

  renderInput = ({ input, meta: { touched, error }, ...custom }) => {
    const hasError = touched && error !== undefined;

    return (
      <>
        <FormUI.Input
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

  renderDatePicker = ({ input: { onChange } }) => {
    const { birthday } = this.state;

    return (
      <div className="field">
        <label htmlFor="birthday">
          Birthday
        </label>
        <DatePicker
          id="birthday"
          placeholderText="Birthday"
          isClearable
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          selected={birthday}
          onChange={(value) => {
            this.handleBirthdayChange(value);
            onChange(value);
          }}
        />
      </div>
    );
  };

  handleBirthdayChange = (value) => {
    this.setState({
      birthday: value,
    });
  };

  render() {
    const {
      open,
      onSubmit,
      header,
      dimmer,
      onClose,
      contact,
    } = this.props;

    return (
      <Modal
        open={open}
        onClose={onClose}
        header={header}
        dimmer={dimmer}
      >
        <div>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={contact || null}
            render={({
              handleSubmit,
              pristine,
              invalid,
              form,
            }) => (
              <FormUI
                onSubmit={handleSubmit}
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
                  component={this.renderDatePicker}
                  label="Birthday"
                  name="birthday"
                />
                <Field
                  component={this.renderInput}
                  label="Photo URL"
                  name="imageURL"
                  placeholder="Photo URL"
                />
                <FormUI.Group inline>
                  <FormUI.Button
                    primary
                    disabled={pristine || invalid}
                  >
                    Submit
                  </FormUI.Button>
                  <FormUI.Button
                    disabled={pristine}
                    onClick={(event) => {
                      event.preventDefault();
                      form.reset();
                      this.handleBirthdayChange(null);
                    }}
                  >
                    Reset
                  </FormUI.Button>
                </FormUI.Group>
              </FormUI>
            )}
          />
        </div>
      </Modal>
    );
  }
}

ModalAddContactContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
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

export default ModalAddContactContainer;
