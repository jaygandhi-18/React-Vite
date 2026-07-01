import React, { useContext, useRef } from "react";
import { themeContext } from "../../../store/useContex";

function AddTask({ handleAddTask }) {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  const taskNameRef = useRef(null);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const text = taskNameRef.current.value;

    handleAddTask(text);
    taskNameRef.current.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" ref={taskNameRef} placeholder="Add a task..." />
      <button
        className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
        type="submit">
        Add
      </button>
    </form>
  );
}

export default AddTask;
