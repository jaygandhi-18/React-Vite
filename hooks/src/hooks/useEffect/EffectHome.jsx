import React, { useContext } from "react";
import { themeContext } from "../../store/useContex";
import { useNavigate } from "react-router";

function EffectHome() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  const navigate = useNavigate();
  //IMportant Hook of react-router for navigation

  document.body.style.backgroundColor = { bgColorCode };
  document.body.style.color = { textColor };
  return (
    <center
      style={{
        paddingTop: "250px",
        paddingBottom: "250px",
        backgroundColor: bgColorCode,
        color: textColor,
      }}>
      <h1>useEffect</h1>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useEffect/ChatRooms")}>
        Chat Rooms
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useEffect/GlobalEvent")}>
        Global Event
      </button>
      {/* <button className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`} onClick={() => navigate("/useEffect/VisiblityElement")} >Visiblity Element</button> */}
    </center>
  );
}

export default EffectHome;
