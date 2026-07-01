import React, { useContext } from "react";
import { themeContext } from "../../store/useContex";
import { useNavigate } from "react-router";

function CallBackHome() {
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
      <h1>useCallBack</h1>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useCallBack/CallBackEnable")}>
        CallBack Enable
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useCallBack/CallBackDisable")}>
        CallBack Disable
      </button>
    </center>
  );
}

export default CallBackHome;
