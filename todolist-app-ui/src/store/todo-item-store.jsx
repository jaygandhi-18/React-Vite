import { createContext } from "react";

export const TodoitemStore = createContext({
  toDoItem: [],
  newItem: () => { },
  deleteItem: () => { }
});