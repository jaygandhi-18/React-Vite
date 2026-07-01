import React, { useContext } from "react";
import { themeContext } from "../store/useContex";
import { useNavigate } from "react-router";

function Home() {
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
      <h1>REACT HOOKS Theme Mode is {dualVal ? "Light" : "Dark"}</h1>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useState/StateHome")}>
        useState
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useEffect/EffectHome")}>
        useEffect
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useRef/RefHome")}>
        useRef
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useMemo/MemoHome")}>
        useMemo
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useCallBack/CallBackHome")}>
        useCallBack
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useReducer/ReducerHome")}>
        useReducer
      </button>
    </center>
  );
}

export default Home;
