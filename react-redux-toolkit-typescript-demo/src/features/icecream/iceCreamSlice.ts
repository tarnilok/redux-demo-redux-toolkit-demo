import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as CakeOrdered } from "../cake/cakeSlice";

type initialStateType = {
  numberOfIceCream: number
}

const initialState: initialStateType = {
  numberOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state = initialState, action: PayloadAction<number>) => {
      state.numberOfIceCream -= action.payload;
    },
    restocked: (state = initialState, action: PayloadAction<number>) => {
      state.numberOfIceCream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numberOfIceCream--;
  //     },
  //   },
  //* ^^^^^^^^ altough this approach of adding an extra reducer works,
  //* the recomended approach is the same using a build function
  // extraReducers: (builder) => {
  //   builder.addCase(CakeOrdered, (state) => {
  //     state.numberOfIceCream--;
  //   });
  // },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
