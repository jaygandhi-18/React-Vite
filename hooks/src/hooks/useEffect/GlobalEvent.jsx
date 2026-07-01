import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../../store/useContex";

function App() {
  const { dualVal } = useContext(themeContext);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      document.body.style.cursor = "none";

      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", handleMove);
    return () => {
      document.body.style.cursor = "auto";

      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <>
      <div
        className="ge_cursor"
        style={{
          position: "absolute",
          backgroundColor: `${dualVal ? "purple" : "lime"}`,
          borderRadius: "50%",
          opacity: 0.4,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
}

function GlobalEvent() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  const [cursor, setCursor] = useState(false);
  const HandleOnClick = () => {
    setCursor(!cursor);
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
        {cursor ? "OFF" : "ON"}
      </button>
      {cursor && <App />}
    </center>
  );
}

export default GlobalEvent;
