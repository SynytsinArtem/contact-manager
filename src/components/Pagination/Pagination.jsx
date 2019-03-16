import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as PaginationUI } from 'semantic-ui-react';

const Pagination = ({ activePage, totalPages, onPageChange }) => (
  <PaginationUI
    boundaryRange={3}
    activePage={activePage}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={totalPages}
    onPageChange={onPageChange}
  />
);

Pagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
