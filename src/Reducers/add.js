const contact = (state = [], action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "DELTE_CONTACT":
      return state.filter((id) => id !== action.payload.id);
    case "UPDATE_CONTACT":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default contact;
