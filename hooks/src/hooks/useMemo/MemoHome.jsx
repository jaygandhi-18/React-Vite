import React, { useContext } from "react";
import { themeContext } from "../../store/useContex";
import { useNavigate } from "react-router";

function MemoHome() {
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
      <h1>useMemo</h1>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useMemo/MemoEnable")}>
        Memo Enable
      </button>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => navigate("/useMemo/MemoDisable")}>
        Memo Disable
      </button>
    </center>
  );
}

export default MemoHome;
