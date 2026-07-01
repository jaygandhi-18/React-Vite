import React, { useContext, useState } from "react";
import { themeContext } from "../../../store/useContex";

function TaskList({ tasks, handleEditTask, handleDeleteTask }) {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext);

  return (
    <>
      {tasks.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => handleEditTask({ ...item, done: !item.done })}
          />

          {item.text}

          <button
            className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`}
            onClick={() => handleDeleteTask(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default TaskList;
