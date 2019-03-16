import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';

import Dropdown from '../../../../components/Dropdown/Dropdown';
import Search from '../../../../components/Search/Search';
import { contactsPerPageOptions } from '../../../../constants/constants';

import styles from './styles.module.scss';

const ControlPanel = ({
  handleAddContactClick,
  contactsPerPage,
  onContactPerPageChange,
  onSearchButtonClick,
  searchValue,
  searchBy,
  onSearchByDropdownChange,
  onSearchInputChange,
  onResetSearchClick,
  isResetSearchButtonDisabled,
}) => {
  const addContactButton = (
    <button
      type="button"
      className={styles.addContactButton}
      onClick={handleAddContactClick}
    >
      <Icon
        name="user plus"
        size="big"
      />
    </button>
  );

  return (
    <div className={styles.controlPanel}>
      <Search
        dropdownSearchByClass={styles.dropdownSearchByClass}
        inputClass={styles.searchInputClass}
        containerClass={styles.searchSection}
        onSearchButtonClick={onSearchButtonClick}
        searchValue={searchValue}
        searchBy={searchBy}
        onSearchByDropdownChange={onSearchByDropdownChange}
        onSearchInputChange={onSearchInputChange}
        onResetSearchClick={onResetSearchClick}
        isResetSearchButtonDisabled={isResetSearchButtonDisabled}
      />
      <div className={styles.pagesAmountAddContactSection}>
        <div className={styles.dropdownPagesSection}>
          <span className={styles.dropdownLabel}>
            Contacts per page:
          </span>
          <Dropdown
            options={contactsPerPageOptions}
            value={contactsPerPage}
            onChange={onContactPerPageChange}
            compact
          />
        </div>
        <Popup
          trigger={addContactButton}
          content="Add new contact"
        />
      </div>
    </div>
  );
};

ControlPanel.propTypes = {
  handleAddContactClick: PropTypes.func.isRequired,
  onContactPerPageChange: PropTypes.func.isRequired,
  contactsPerPage: PropTypes.number.isRequired,
  onSearchButtonClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  searchBy: PropTypes.string.isRequired,
  onSearchByDropdownChange: PropTypes.func.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onResetSearchClick: PropTypes.func.isRequired,
  isResetSearchButtonDisabled: PropTypes.bool.isRequired,
};

export default ControlPanel;
