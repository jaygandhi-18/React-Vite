import React, { useContext, useRef } from "react";
import { themeContext } from "../../store/useContex";

function ClickCount() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  let count = useRef(0);
  const HandleOnClick = () => {
    count.current = count.current + 1;
    console.log(count.current);
  };
  return (
    <center
      style={{
        paddingTop: "250px",
        paddingBottom: "250px",
        backgroundColor: bgColorCode,
        color: textColor,
      }}>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={HandleOnClick}>
        {" "}
        Click Me{" "}
      </button>{" "}
      <br />
      value in console
    </center>
  );
}

export default ClickCount;
