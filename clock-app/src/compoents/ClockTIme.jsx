import React, { useEffect, useState } from "react";

function ClockTIme() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <div>
      <p>
        This Is The Current Time : {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default ClockTIme;
