import React, { useContext } from "react";
import { themeContext } from "../../store/useContex";
import { useNavigate } from "react-router";

function RefHome() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  const navigate = useNavigate();
  //IMportant Hook of react-router for navigation
  return (
    <center
      style={{
        paddingTop: "250px",
        paddingBottom: "250px",
        backgroundColor: bgColorCode,
        color: textColor,
      }}>
      <h1>USE REF : Theme Mode is {dualVal ? "Light" : "Dark"}</h1>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useRef/ClickCount")}>
        Click Count
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useRef/RefTextArea")}>
        Ref TextArea
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useRef/StopWatch")}>
        StopWatch
      </button>
    </center>
  );
}

export default RefHome;
