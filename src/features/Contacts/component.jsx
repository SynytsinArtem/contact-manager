import React from 'react';
import PropTypes from 'prop-types';

import ContactCardList from './components/ContactCardList/ContactCardList';
import { contactPropType } from '../../utils/custom-prop-types';
import ControlPanel from './components/ControlPanel/ControlPanel';
import Pagination from '../../components/Pagination/Pagination';
import Spinner from '../../components/Spinner/Spinner';

import styles from './styles.module.scss';

const Contacts = ({
  loading,
  contactList,
  handleAddContactClick,
  handleDeleteButtonClick,
  handleEditContact,
  handleCallHistoryClick,
  onPageChange,
  activePage,
  totalPages,
  contactsPerPage,
  onContactPerPageChange,
  onSearchButtonClick,
  searchValue,
  searchBy,
  onSearchByDropdownChange,
  onSearchInputChange,
  onResetSearchClick,
  isResetSearchButtonDisabled,
}) => (
  <main className={styles.contactContainer}>
    <ControlPanel
      handleAddContactClick={handleAddContactClick}
      contactsPerPage={contactsPerPage}
      onContactPerPageChange={onContactPerPageChange}
      onSearchButtonClick={onSearchButtonClick}
      searchValue={searchValue}
      searchBy={searchBy}
      onSearchByDropdownChange={onSearchByDropdownChange}
      onSearchInputChange={onSearchInputChange}
      onResetSearchClick={onResetSearchClick}
      isResetSearchButtonDisabled={isResetSearchButtonDisabled}
    />
    <div className={styles.contactListContainer}>
      {
        loading
          ? <Spinner />
          : (
            <ContactCardList
              contactList={contactList}
              handleDeleteButtonClick={handleDeleteButtonClick}
              handleEditContact={handleEditContact}
              handleCallHistoryClick={handleCallHistoryClick}
            />
          )
      }
    </div>
    {
      totalPages > 1
        ? (
          <div className={styles.paginationContainer}>
            <Pagination
              activePage={activePage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        )
        : null
    }
  </main>
);

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape(contactPropType)),
  handleAddContactClick: PropTypes.func.isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired,
  handleEditContact: PropTypes.func.isRequired,
  handleCallHistoryClick: PropTypes.func.isRequired,
  contactsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onContactPerPageChange: PropTypes.func.isRequired,
  onSearchButtonClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  searchBy: PropTypes.string.isRequired,
  onSearchByDropdownChange: PropTypes.func.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onResetSearchClick: PropTypes.func.isRequired,
  isResetSearchButtonDisabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

Contacts.defaultProps = {
  contactList: [],
};

export default Contacts;
