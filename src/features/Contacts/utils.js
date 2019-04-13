const getConvertedStringDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

export const convertContactForRequest = (contact) => {
  const convertedContact = {};

  Object.keys(contact).forEach((key) => {
    if (key === 'firstName' || key === 'lastName') {
      return;
    }

    if (key === 'birthday') {
      convertedContact[key] = getConvertedStringDate(contact[key]);

      return;
    }

    convertedContact[key] = contact[key];
  });

  convertedContact.name = `${contact.firstName} ${contact.lastName}`;

  return convertedContact;
};

export const convertContactForEdit = (contact) => {
  const convertedContact = {};

  Object.keys(contact).forEach((key) => {
    if (key === 'name') {
      return;
    }

    convertedContact[key] = contact[key];
  });

  [convertedContact.firstName, convertedContact.lastName] = contact.name.split(' ');

  return convertedContact;
};

export const validateValueLength = (value, limit) => value.length <= limit;
