import { useState } from "react";
import { CakeView } from "./features/cake/cakeView";
import { IceCreamView } from "./features/icecream/iceCreamView";
import { UserView } from "./features/user/userView";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
