export const addContact = (payload) => {
  return {
    type: "ADD_CONTACT",
    payload,
  };
};

export const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: {
      id: id,
    },
  };
};

export const updateContact = (payload) => {
  return {
    type: "UPDATE_CONTACT",
    payload: payload,
  };
};
