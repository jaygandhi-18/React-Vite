import React, { useContext, useRef, useState } from "react";
import { themeContext } from "../../store/useContex";

function RefTextArea() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  const [showText, setShowText] = useState("Empty TextArea");
  const textRef = useRef("");

  const handleOnClick = () => {
    setShowText(textRef.current.value);
    textRef.current.value = "";
  };
  return (
    <center
      style={{
        paddingTop: "250px",
        paddingBottom: "250px",
        backgroundColor: bgColorCode,
        color: textColor,
      }}>
      <div>{showText}</div>
      <div>
        <input type="text" ref={textRef} />
        <button
          className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
          onClick={handleOnClick}>
          Set Text
        </button>
      </div>
    </center>
  );
}

export default RefTextArea;
