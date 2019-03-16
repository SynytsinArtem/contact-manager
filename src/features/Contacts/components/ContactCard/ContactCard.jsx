import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Image } from 'semantic-ui-react';

import { contactPropType } from '../../../../utils/custom-prop-types';

import styles from './styles.module.scss';

const ContactCard = ({
  handleDeleteButtonClick,
  handleEditContact,
  handleCallHistoryClick,
  contact: {
    name,
    birthday,
    phone,
    email,
    imageURL,
    id,
  },
}) => (
  <Card centered>
    <Card.Content>
      {imageURL && (
        <Image
          floated="right"
          size="mini"
          src={imageURL}
        />
      )}
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Meta className={birthday ? null : styles.birthday}>
        birthday:
        {' '}
        {birthday}
      </Card.Meta>
      <Card.Description>
        <p>
          tel:
          {' '}
          {phone}
        </p>
        {email && (
          <p>
            email:
            {' '}
            {email}
          </p>
        )}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui three buttons">
        <Button
          basic
          color="yellow"
          onClick={handleEditContact}
        >
          Edit
        </Button>
        <Button
          basic
          color="green"
          onClick={handleCallHistoryClick}
        >
          Call history
        </Button>
        <Button
          basic
          color="red"
          onClick={() => handleDeleteButtonClick(id, name)}
        >
          Delete
        </Button>
      </div>
    </Card.Content>
  </Card>
);

ContactCard.propTypes = {
  contact: PropTypes.shape(contactPropType).isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired,
  handleEditContact: PropTypes.func.isRequired,
  handleCallHistoryClick: PropTypes.func.isRequired,
};

export default ContactCard;
