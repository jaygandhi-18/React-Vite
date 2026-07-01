import React, { useContext, useRef, useState } from "react";
import { themeContext } from "../../store/useContex";

function StopWatch() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const intervalRef = useRef(null);

  let HandleOnStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  let HandleOnStop = () => {
    clearInterval(intervalRef.current);
  };

  let stopwatchTime = 0.0;

  if (startTime != 0 && now != 0) {
    stopwatchTime = (now - startTime) / 1000;
  }

  let HandleOnReset = () => {
    clearInterval(intervalRef.current);
    setStartTime(0);
    setNow(0);
  };

  return (
    <>
      <div
        style={{
          paddingTop: "250px",
          paddingBottom: "250px",
          backgroundColor: bgColorCode,
          color: textColor,
        }}>
        <div
          style={{
            paddingLeft: "540px",
          }}>
          <h1>StopWatch : {stopwatchTime}</h1>
        </div>
        <div style={{ paddingLeft: "555px" }}>
          <button
            className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
            onClick={HandleOnStart}>
            Start
          </button>
          <button
            className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
            onClick={HandleOnStop}>
            Stop
          </button>
          <button
            className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
            onClick={HandleOnReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
