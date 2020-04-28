import defaultContact from "../Data";
const contact = (state = defaultContact, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "DELETE_CONTACT":
      return state.filter((v) => v.id !== action.payload.id);
    case "UPDATE_CONTACT":
      let newState = [];
      for (var i = 0; i < state.length; i++) {
        if (action.payload.id === state[i].id) {
          newState.push(action.payload);
        } else {
          newState.push(state[i]);
        }
      }
      return newState;

    default:
      return state;
  }
};
export default contact;
