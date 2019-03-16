import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as DropdownUI } from 'semantic-ui-react';

const Dropdown = ({
  options,
  value,
  onChange,
  compact,
  className,
}) => {
  const convertedOptions = options.map((option, index) => ({
    key: index,
    text: option,
    value: option,
  }));

  return (
    <DropdownUI
      className={className}
      selection
      compact={compact}
      value={value}
      options={convertedOptions}
      onChange={onChange}
    />
  );
};

Dropdown.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number).isRequired,
    PropTypes.arrayOf(PropTypes.string).isRequired,
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  compact: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  className: null,
};

export default Dropdown;
