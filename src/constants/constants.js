export const SERVER_API_URL = 'http://localhost:4000';

export const defaultContactsPerPageNumber = 15;

export const contactsPerPageOptions = [10, 15, 25, 50];

export const toastifyAutoClose = 3000;

export const inputValueMaxLength = 40;

// eslint-disable-next-line no-useless-escape
export const emailValidateRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// eslint-disable-next-line no-useless-escape
export const phoneValidateRegexp = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

// eslint-disable-next-line no-useless-escape
export const urlValidateRegexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
