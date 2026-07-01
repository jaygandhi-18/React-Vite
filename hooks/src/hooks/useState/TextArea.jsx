import React, { useContext, useState } from "react";
import { themeContext } from "../../store/useContex";

function TextArea() {

  const { bgColorCode, textColor, dualVal } = useContext(themeContext)

  const [text, setText] = useState("Hello");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <center style={{ paddingTop: "250px", paddingBottom: "250px", backgroundColor: bgColorCode, color: textColor }}>
      {text} <br />
      <input value={text} onChange={handleOnChange}></input> <br />
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => setText("Hello")}>Reset</button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => setText("")}
        style={{ marginLeft: "5px" }}>empty</button>
    </center>
  );
}

export default TextArea;
