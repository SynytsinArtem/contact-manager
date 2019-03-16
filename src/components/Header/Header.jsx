import React from 'react';
import { Header as HeaderUI, Icon } from 'semantic-ui-react';

import styles from './styles.module.scss';

const Header = () => (
  <header className={styles.header}>
    <HeaderUI
      as="h1"
      icon
      textAlign="center"
      inverted
    >
      <Icon
        name="users"
      />
      <HeaderUI.Content className={styles.content}>
        Contacts
      </HeaderUI.Content>
    </HeaderUI>
  </header>
);

export default Header;
