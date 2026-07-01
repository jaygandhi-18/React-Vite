import React, { useCallback, useContext, useState } from "react";
import CBExample from "./comps/CBExample";
import { themeContext } from "../../store/useContex";

function CallBackEnable() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  const [counte, setCounte] = useState(0);
  const [name, setName] = useState("Luffy");

  const getName = useCallback(() => {
    return "ssd";
  }, []);

  return (
    <center
      style={{
        paddingTop: "250px",
        paddingBottom: "250px",
        backgroundColor: bgColorCode,
        color: textColor,
      }}>
      <CBExample name={"Zoro"} getName={getName} />
      <div>
        {counte}
        <button
          className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
          onClick={() => {
            setCounte(counte + 1);
          }}>
          increase
        </button>
      </div>
    </center>
  );
}

export default CallBackEnable;
