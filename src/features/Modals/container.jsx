import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ModalAddContact from './components/ModalAddContact/ModalAddContact';
import ModalConfirm from './components/ModalConfirm/ModalConfirm';
import ModalCallHistory from './components/ModalCallHistory/ModalCallHistory';

const MODAL_COMPONENTS = {
  MODAL_ADD_CONTACT: ModalAddContact,
  MODAL_CONFIRM: ModalConfirm,
  MODAL_CALL_HISTORY: ModalCallHistory,
};

const ModalContainer = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];

  return (
    <SpecificModal
      open
      {...modalProps}
    />
  );
};

ModalContainer.propTypes = {
  modalType: PropTypes.string.isRequired,
  modalProps: PropTypes.shape({
    header: PropTypes.string,
    modalContent: PropTypes.node,
    onConfirm: PropTypes.func,
    onDecline: PropTypes.func,
  }),
};

ModalContainer.defaultProps = {
  modalProps: {},
};

const mapStateToProps = state => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps,
});

export default connect(mapStateToProps)(ModalContainer);
