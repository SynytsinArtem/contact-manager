import React from 'react';
import { ToastContainer } from 'react-toastify';

import { toastifyAutoClose } from '../../constants/constants';

const Toastify = () => (
  <ToastContainer
    position="top-right"
    autoClose={toastifyAutoClose}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnVisibilityChange
    draggable
    pauseOnHover
  />
);

export default Toastify;
