import React, { useContext, useReducer } from "react";
import { themeContext } from "../../store/useContex";

function AgeReducer() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  function reducerFn(state, action) {
    if (action.type === "INCRESE_AGE") {
      return { age: state.age + 1 };
    } else if (action.type === "DECRESE_AGE") {
      return { age: state.age - 1 };
    } else if (action.type === "RESET_AGE") {
      return { age: (state.age = 20) };
    }
  }

  const [state, dispatch] = useReducer(reducerFn, { age: 20 });

  return (
    <center
      style={{
        paddingTop: "250px",
        paddingBottom: "250px",
        backgroundColor: bgColorCode,
        color: textColor,
      }}>
      <h1>Your Age Is {state.age}</h1>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => {
          dispatch({ type: "INCRESE_AGE" });
        }}>
        increase Age
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => {
          dispatch({ type: "DECRESE_AGE" });
        }}>
        decrease Age
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => {
          dispatch({ type: "RESET_AGE" });
        }}>
        reset Age
      </button>
    </center>
  );
}

export default AgeReducer;
