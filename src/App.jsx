import React from 'react';
import { Container } from 'semantic-ui-react';

import Contacts from './features/Contacts';
import AppHeader from './components/Header/Header';
import Toastify from './components/Toastify/Toastify';
import Modal from './features/Modals/container';

import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Container>
    <AppHeader />
    <Contacts />
    <Toastify />
    <Modal />
  </Container>
);

export default App;
