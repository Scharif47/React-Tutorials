import React, { useState } from "react";
import ComponentOne from "./ComponentOne";
import { MyContext } from "./Context";

function Main() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Hey, Please type in your name: </label>
      <input onChange={handleInput} value={input} type="text" />
      <button>Send</button>
      <MyContext.Provider value={input}>
        <ComponentOne />
      </MyContext.Provider>
    </form>
  );
}

export default Main;
