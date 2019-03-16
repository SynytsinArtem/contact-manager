import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Message, Table } from 'semantic-ui-react';
import { callHistoryPropType } from '../../../../utils/custom-prop-types';

const ContactCallHistory = ({ callHistory }) => {
  const getIconCallColor = (cellType) => {
    let color;

    switch (cellType) {
      case 'Incoming':
        color = 'red';
        break;

      case 'Outgoing':
        color = 'green';
        break;

      default:
        color = 'green';
    }

    return color;
  };

  const renderRow = call => (
    <Table.Row key={call.date}>
      <Table.Cell>
        <Icon
          name="call"
          size="large"
          color={getIconCallColor(call.type)}
        />
        <i>{call.type}</i>
      </Table.Cell>
      <Table.Cell>{call.date}</Table.Cell>
      <Table.Cell>{call.contact}</Table.Cell>
    </Table.Row>
  );

  if (!callHistory) {
    return (
      <Message warning>
        <Message.Header>No call history for this contact</Message.Header>
      </Message>
    );
  }

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Call type</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Contact</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {callHistory.map(renderRow)}
      </Table.Body>
    </Table>
  );
};

ContactCallHistory.propTypes = {
  callHistory: PropTypes.arrayOf(PropTypes.shape(callHistoryPropType)),
};

ContactCallHistory.defaultProps = {
  callHistory: null,
};

export default ContactCallHistory;
