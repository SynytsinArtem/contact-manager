import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal as ModalUI } from 'semantic-ui-react';

const Modal = ({
  open,
  children,
  showActions,
  onClose,
  header,
  dimmer,
  size,
  closeOnDimmerClick,
  cancelButton,
  okButton,
}) => (
  <div>
    <ModalUI
      dimmer={dimmer}
      open={open}
      size={size}
      closeIcon
      onClose={onClose}
      closeOnDimmerClick={closeOnDimmerClick}
    >
      <ModalUI.Header>
        {header}
      </ModalUI.Header>
      <ModalUI.Content>
        <ModalUI.Description>
          {children}
        </ModalUI.Description>
      </ModalUI.Content>
      {
        showActions && (
          <ModalUI.Actions>
            {cancelButton && (
              <Button
                color="red"
                content="Cancel"
                onClick={onClose}
              />
            )}
            {okButton && (
              <Button
                positive
                icon="checkmark"
                labelPosition="right"
                content="Ok"
              />
            )}
          </ModalUI.Actions>
        )
      }
    </ModalUI>
  </div>
);

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  showActions: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  dimmer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.string,
  closeOnDimmerClick: PropTypes.bool,
  cancelButton: PropTypes.bool,
  okButton: PropTypes.bool,
};

Modal.defaultProps = {
  showActions: null,
  size: 'tiny',
  closeOnDimmerClick: false,
  cancelButton: null,
  okButton: null,
};

export default Modal;
