import React from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ModalConfirm = ({
  open,
  text,
  onCancel,
  onConfirm,
}) => (
  <Confirm
    open={open}
    size="tiny"
    content={text}
    onCancel={onCancel}
    onConfirm={onConfirm}
    cancelButton={(
      <Button
        color="red"
        content="No"
      />
    )}
    confirmButton={(
      <Button
        primary={false}
        color="green"
        content="Yes"
      />
    )}
  />
);

ModalConfirm.propTypes = {
  open: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ModalConfirm;
