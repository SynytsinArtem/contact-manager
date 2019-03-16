import React from 'react';
import PropTypes from 'prop-types';
import { Button, Search as SearchUI } from 'semantic-ui-react';
import Dropdown from '../Dropdown/Dropdown';

const Search = ({
  inputClass,
  dropdownSearchByClass,
  containerClass,
  onSearchButtonClick,
  searchValue,
  searchBy,
  onSearchInputChange,
  onSearchByDropdownChange,
  onResetSearchClick,
  isResetSearchButtonDisabled,
}) => (
  <div className={containerClass}>
    <SearchUI
      className={inputClass}
      showNoResults={false}
      value={searchValue}
      onSearchChange={onSearchInputChange}
    />
    <Button
      content="Search by"
      size="tiny"
      color="grey"
      disabled={!searchValue}
      onClick={onSearchButtonClick}
    />
    <Dropdown
      className={dropdownSearchByClass}
      options={[
        'name',
        'phone',
        'email',
      ]}
      value={searchBy}
      compact={false}
      onChange={onSearchByDropdownChange}
    />
    <Button
      content="Reset search"
      size="tiny"
      disabled={isResetSearchButtonDisabled}
      onClick={onResetSearchClick}
    />
  </div>
);

Search.propTypes = {
  inputClass: PropTypes.string.isRequired,
  containerClass: PropTypes.string.isRequired,
  onSearchButtonClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  searchBy: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onSearchByDropdownChange: PropTypes.func.isRequired,
  onResetSearchClick: PropTypes.func.isRequired,
  isResetSearchButtonDisabled: PropTypes.bool.isRequired,
  dropdownSearchByClass: PropTypes.string.isRequired,
};

export default Search;
