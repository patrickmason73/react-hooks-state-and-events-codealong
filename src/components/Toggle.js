import React, { useState } from "react";


function Toggle() {
  const [toggleState, setToggle] = useState(false)

  function handleToggle() {
    setToggle(!toggleState) 
  }

  const color = toggleState ? "red" : "white"

  return <button style={{background: color}} onClick={handleToggle}>{toggleState ? "ON" : "OFF"}</button>;
}

export default Toggle;
