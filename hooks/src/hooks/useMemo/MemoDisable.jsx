import React, { useContext, useState } from "react";
import { themeContext } from "../../store/useContex";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000,
  };
});

function MemoDisable() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  const [counter, setCounter] = useState(0);
  const [numbers, setNumber] = useState(nums);

  const magical = numbers.find((item) => item.isMagical);

  return (
    <center
      style={{
        paddingTop: "250px",
        paddingBottom: "250px",
        backgroundColor: bgColorCode,
        color: textColor,
      }}>
      <span>Magical number is {magical.index}</span>
      <div>{counter}</div>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => {
          setCounter(counter + 1);
        }}>
        Increase
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => {
          setCounter(0);
        }}>
        Reset
      </button>
    </center>
  );
}

export default MemoDisable;
