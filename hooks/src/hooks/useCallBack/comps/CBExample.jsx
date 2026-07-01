import React, { memo, useContext } from "react";
import { themeContext } from "../../../store/useContex";

function CBExample({ name, getName }) {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  console.log("DBDiable is rander");
  return (
    <>
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        onClick={() => {
          getName();
        }}>
        {name}
      </button>
    </>
  );
}

export default memo(CBExample);
