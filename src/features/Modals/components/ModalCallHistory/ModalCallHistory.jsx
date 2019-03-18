import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';

const ModalCallHistory = ({
  open,
  header,
  children,
  onClose,
  dimmer,
  size,
  closeOnDimmerClick,
  showActions,
  cancelButton,
}) => (
  <Modal
    open={open}
    header={header}
    onClose={onClose}
    dimmer={dimmer}
    size={size}
    closeOnDimmerClick={closeOnDimmerClick}
    showActions={showActions}
    cancelButton={cancelButton}
  >
    {children}
  </Modal>
);

ModalCallHistory.propTypes = {
  open: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  dimmer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.string,
  closeOnDimmerClick: PropTypes.bool,
  showActions: PropTypes.bool,
  children: PropTypes.node.isRequired,
  cancelButton: PropTypes.bool.isRequired,
};

ModalCallHistory.defaultProps = {
  size: null,
  closeOnDimmerClick: null,
  showActions: null,
};

export default ModalCallHistory;
