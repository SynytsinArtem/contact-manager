import React from 'react';
import PropTypes from 'prop-types';
import { Card, Message } from 'semantic-ui-react';

import ContactCard from '../ContactCard/ContactCard';
import { contactPropType } from '../../../../utils/custom-prop-types';

import styles from './styles.module.scss';

const ContactCardList = ({
  contactList,
  handleDeleteButtonClick,
  handleEditContact,
  handleCallHistoryClick,
}) => {
  const contactCards = contactList.map(contact => (
    <ContactCard
      contact={contact}
      key={contact.id}
      handleDeleteButtonClick={handleDeleteButtonClick}
      handleEditContact={() => handleEditContact(contact)}
      handleCallHistoryClick={() => handleCallHistoryClick(contact)}
    />
  ));

  const noContactsMessage = (
    <div className={styles.messageContainer}>
      <Message
        warning
        header="No contacts found"
        size="small"
        icon="warning sign"
      />
    </div>
  );

  return (
    <Card.Group>
      {
        contactList.length
          ? contactCards
          : noContactsMessage
      }
    </Card.Group>
  );
};

ContactCardList.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape(contactPropType)),
  handleDeleteButtonClick: PropTypes.func.isRequired,
  handleEditContact: PropTypes.func.isRequired,
  handleCallHistoryClick: PropTypes.func.isRequired,
};

ContactCardList.defaultProps = {
  contactList: [],
};

export default ContactCardList;
