import React from "react";
import { MyContext } from "./Context";

function ComponentFour() {
  const name = React.useContext(MyContext);

  return (
    <div>
      <h1>Hey there, {name}</h1>
    </div>
  );
}

export default ComponentFour;
