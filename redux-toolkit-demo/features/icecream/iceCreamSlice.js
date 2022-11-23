const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state = initialState, action) => {
      state.numberOfIceCream -= action.payload
    },
    restocked: (state=initialState, action) => {
        state.numberOfIceCream += action.payload
    }
  },
});

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions
