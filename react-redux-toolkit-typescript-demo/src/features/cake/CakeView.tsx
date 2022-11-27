import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const numberOfCakes = useAppSelector((state) => state.cake.numberOfCakes);
  const dispatch = useAppDispatch();
  //todo here state refers to the redux state which contains multiple reducers
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  );
};
