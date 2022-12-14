import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numberOfIceCream = useSelector(
    (state) => state.icecream.numberOfIceCream
  );
  const dispatch = useDispatch();
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
