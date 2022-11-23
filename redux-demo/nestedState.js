const redux = require("redux");
const produce = require("immer").produce;
const initialState = {
  name: "Koray",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: " MA",
  },
};
const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: { ...state.address, street: action.payload },
      //   };
      //? ^^^^^^^ used produce structure below to handle nestedState
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updatedStore", store.getState())
);

store.dispatch(updateStreet("456 Main St"));
unsubscribe();
