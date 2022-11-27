const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icecream/iceCreamSlice").iceCreamActions;

const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("updated store", store.getState())
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered(5));
// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.restocked(3));

// unsubscribe();

store.dispatch(fetchUsers())