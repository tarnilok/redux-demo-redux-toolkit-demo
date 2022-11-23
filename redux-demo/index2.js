//! implementing redux-logger middleware
const redux = require("redux"); //!5
const createStore = redux.createStore; //!6
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

//action type
const CAKE_ORDERED = "CAKE_ORDERED"; //!1
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  //!2
  //action creator
  return {
    //action
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// (prevState, action) => newState

// const initialState = {
//   //!3
//   numOfCakes: 10,
//   anotherProperty: 0,
//   numofIceCreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numofIceCreams: 20,
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  //!4
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const cakeReducer = (state = initialCakeState, action) => {
  //!4
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case CAKE_RESTOCKED:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});
// const store = createStore(reducer); //!7
const store = createStore(rootReducer, applyMiddleware(logger)); //!7
console.log("initial state", store.getState()); //!8

const unsubscribe = //!10
  store.subscribe(() => {}); //!9 it is a listener

//! 10
// store.dispatch(orderCake()) // actioncreator is invoken or you can pass your action directly
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))
//? ^^^^^ changed to this below
const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);
unsubscribe();
