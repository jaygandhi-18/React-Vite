import React, { useContext, useState } from "react";
import { themeContext } from "../../store/useContex";

function Counter() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  const [count, setCount] = useState(0);
  return (
    <center
      style={{
        paddingTop: "250px",
        paddingBottom: "250px",
        backgroundColor: bgColorCode,
        color: textColor,
      }}>
      {count} <br />
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => setCount(count - 1)}>
        -1
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => setCount(0)}>
        0
      </button>
    </center>
  );
}

export default Counter;
