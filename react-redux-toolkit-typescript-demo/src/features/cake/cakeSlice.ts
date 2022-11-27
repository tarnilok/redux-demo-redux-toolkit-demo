import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  numberOfCakes: number
}

const initialState: initialStateType = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      // we don't need action here because of decreasing only one
      state.numberOfCakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numberOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
