export const adddContact = (
  id,
  firstName,
  lastName,
  position,
  company,
  email,
  phone,
  countryCode
) => {
  return {
    type: "ADD_CONTACT",
    payLoad: {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      countryCode: countryCode,
      phone: phone,
      company: company,
      position: position,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: "DELTE_CONTACT",
    payLoad: {
      id: id,
    },
  };
};

export const updateContact = (
  id,
  firstName,
  lastName,
  position,
  company,
  email,
  phone,
  countryCode
) => {
  return {
    type: "UPDATE_CONTACT",
    payLoad: {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      countryCode: countryCode,
      phone: phone,
      company: company,
      position: position,
    },
  };
};
