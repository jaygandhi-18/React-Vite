import React, { useContext } from "react";
import { themeContext } from "../../store/useContex";
import { useNavigate } from "react-router";

function ReducerHome() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  const navigate = useNavigate();

  return (
    <center
      style={{
        paddingTop: "250px",
        paddingBottom: "250px",
        backgroundColor: bgColorCode,
        color: textColor,
      }}>
      <h1>useReducer</h1>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useReducer/AgeReducer")}>
        Age Reducer
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useReducer/ToDoListReducer")}>
        ToDoList Reducer
      </button>
    </center>
  );
}

export default ReducerHome;
