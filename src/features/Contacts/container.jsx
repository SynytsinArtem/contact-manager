import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Contacts from './component';
import * as actions from './actions';
import * as modalActions from '../Modals/actions';
import { convertContactForRequest, convertContactForEdit } from './utils';
import { contactPropType } from '../../utils/custom-prop-types';
import ContactCallHistory from './components/ContactCallHistory/ContactCallHistory';
import { defaultContactsPerPageNumber } from '../../constants/constants';

class ContactsContainer extends React.Component {
  state = {
    activePage: 1,
    contactsPerPage: defaultContactsPerPageNumber,
    searchValue: '',
    searchBy: 'name',
    searchParams: {
      searchValue: '',
      searchBy: '',
    },
  };

  componentDidMount() {
    this.receiveContacts();
  }

  receiveContacts = () => {
    const { receiveContactsThunk, receiveContactsLengthThunk } = this.props;
    const {
      activePage,
      contactsPerPage,
      searchParams: {
        searchValue,
        searchBy,
      },
    } = this.state;

    receiveContactsLengthThunk(searchValue, searchBy)
      .then((message) => {
        if (message !== 'Network Error') {
          receiveContactsThunk(activePage, contactsPerPage, searchValue, searchBy);
        }
      })
      .then(() => this.checkActivePage());
  };

  handleCallHistoryClick = (contact) => {
    const { showModal, hideModal } = this.props;

    showModal({
      modalType: 'MODAL_CALL_HISTORY',
      modalProps: {
        onClose: hideModal,
        header: `${contact.name} call history`,
        children: (<ContactCallHistory callHistory={contact.callHistory} />),
        dimmer: true,
        size: 'large',
        closeOnDimmerClick: true,
        showActions: true,
        cancelButton: true,
      },
    });
  };

  handleAddContactClick = () => {
    const { showModal, hideModal } = this.props;

    showModal({
      modalType: 'MODAL_ADD_CONTACT',
      modalProps: {
        onClose: hideModal,
        onSubmit: this.addNewContact,
        header: 'Add contact',
        dimmer: 'blurring',
      },
    });
  };

  handleEditContact = (contact) => {
    const { showModal, hideModal } = this.props;

    showModal({
      modalType: 'MODAL_ADD_CONTACT',
      modalProps: {
        onClose: hideModal,
        onSubmit: this.editContact,
        header: `Edit contact ${contact.name}`,
        contact: convertContactForEdit(contact),
        dimmer: 'blurring',
      },
    });
  };

  handleDeleteButtonClick = (id, name) => {
    const { showModal, hideModal } = this.props;

    showModal({
      modalType: 'MODAL_CONFIRM',
      modalProps: {
        text: `Are you sure you want to delete contact ${name}?`,
        onCancel: hideModal,
        onConfirm: () => this.removeContact(id, name),
      },
    });
  };

  addNewContact = (newContact) => {
    const { hideModal, addNewContactThunk } = this.props;

    const convertedContact = convertContactForRequest(newContact);

    addNewContactThunk(convertedContact)
      .then(() => this.receiveContacts())
      .then(() => hideModal());
  };

  editContact = (editedContact) => {
    const { hideModal, editContactThunk } = this.props;

    const convertedContact = convertContactForRequest(editedContact);

    editContactThunk(convertedContact)
      .then(() => this.receiveContacts())
      .then(() => hideModal());
  };

  removeContact = (id, name) => {
    const { hideModal, removeContactThunk } = this.props;

    removeContactThunk(id, name)
      .then(() => this.receiveContacts())
      .then(() => hideModal());
  };

  checkActivePage = () => {
    const { activePage } = this.state;
    const totalPages = this.getTotalPagesNumber();

    if (totalPages && activePage > totalPages) {
      this.setState(prevState => ({
        activePage: prevState.activePage - 1,
      }), this.receiveContacts);
    }
  };

  onPageChange = (event, { activePage }) => {
    this.setState({
      activePage,
    }, this.receiveContacts);
  };

  onContactPerPageChange = (event, { value }) => {
    this.setState({
      contactsPerPage: value,
      activePage: 1,
    }, this.receiveContacts);
  };

  getTotalPagesNumber = () => {
    const { contactListLength } = this.props;
    const { contactsPerPage } = this.state;

    return Math.ceil(contactListLength / contactsPerPage);
  };

  onSearchButtonClick = () => {
    const { searchValue, searchBy } = this.state;

    this.setState({
      searchParams: {
        searchValue: searchValue.trim(),
        searchBy,
      },
    }, this.receiveContacts);
  };

  onSearchByDropdownChange = (event, { value }) => {
    this.setState({
      searchBy: value,
    });
  };

  onSearchInputChange = (event, { value }) => {
    this.setState({
      searchValue: value,
    });
  };

  onResetSearchClick = () => {
    this.setState({
      searchValue: '',
      searchBy: 'name',
      searchParams: {
        searchValue: '',
        searchBy: '',
      },
    }, this.receiveContacts);
  };

  isResetSearchButtonDisabled = () => {
    const { searchParams } = this.state;

    return searchParams.searchValue === '' || searchParams.searchBy === '';
  };

  render() {
    const { contactList, loading } = this.props;
    const {
      activePage,
      contactsPerPage,
      searchValue,
      searchBy,
    } = this.state;

    return (
      <Contacts
        loading={loading}
        contactList={contactList}
        handleAddContactClick={this.handleAddContactClick}
        handleDeleteButtonClick={this.handleDeleteButtonClick}
        handleEditContact={this.handleEditContact}
        handleCallHistoryClick={this.handleCallHistoryClick}
        onPageChange={this.onPageChange}
        activePage={activePage}
        totalPages={this.getTotalPagesNumber()}
        contactsPerPage={contactsPerPage}
        onContactPerPageChange={this.onContactPerPageChange}
        onSearchButtonClick={this.onSearchButtonClick}
        searchValue={searchValue}
        searchBy={searchBy}
        onSearchByDropdownChange={this.onSearchByDropdownChange}
        onSearchInputChange={this.onSearchInputChange}
        onResetSearchClick={this.onResetSearchClick}
        isResetSearchButtonDisabled={this.isResetSearchButtonDisabled()}
      />
    );
  }
}

ContactsContainer.propTypes = {
  receiveContactsThunk: PropTypes.func.isRequired,
  receiveContactsLengthThunk: PropTypes.func.isRequired,
  contactList: PropTypes.arrayOf(PropTypes.shape(contactPropType)),
  contactListLength: PropTypes.number,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  addNewContactThunk: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  removeContactThunk: PropTypes.func.isRequired,
  editContactThunk: PropTypes.func.isRequired,
};

ContactsContainer.defaultProps = {
  contactList: [],
  contactListLength: null,
};

const mapStateToProps = state => ({
  contactList: state.contacts.contactList,
  contactListLength: state.contacts.contactListLength,
  loading: state.contacts.loading,
});

export default connect(
  mapStateToProps,
  { ...actions, ...modalActions },
)(ContactsContainer);
