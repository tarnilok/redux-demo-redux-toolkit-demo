import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numberOfIceCream = useAppSelector(
    (state) => state.icecream.numberOfIceCream
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of ice creams - {numberOfIceCream}</h2>
      <button onClick={() => dispatch(ordered(3))}>Order ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice creams
      </button>
    </div>
  );
};
