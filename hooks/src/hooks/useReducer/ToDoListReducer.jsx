import React, { useContext, useReducer, useRef } from "react";
import { themeContext } from "../../store/useContex";
import AddTask from "./comps/AddTask";
import TaskList from "./comps/TaskList";

function taskReducer(state, action) {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return state.filter((t) => t.id !== action.id);
    }
  }
}

function ToDoListReducer() {
  const { bgColorCode, textColor } = useContext(themeContext);
  const nextId = useRef(0);

  const [tasks, dispatch] = useReducer(taskReducer, []);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId.current++,
      text: text,
    });
  }

  function handleEditTask(task) {
    dispatch({ type: "changed", task });
  }

  function handleDeleteTask(taskId) {
    dispatch({ type: "deleted", id: taskId });
  }

  return (
    <center
      style={{
        paddingTop: "250px",
        paddingBottom: "250px",
        backgroundColor: bgColorCode,
        color: textColor,
      }}>
      <div>
        <AddTask handleAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </center>
  );
}

export default ToDoListReducer;

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
