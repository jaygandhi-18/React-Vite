import React, { useState, useReducer } from 'react';
import Header from './components/Header';
import Addvalue from './components/Addvalue';
import Curvalue from './components/Curvalue';
import ToDoItems from './components/ToDoItems';
import WelcomMsg from './components/WelcomMsg';
import { TodoitemStore } from './store/todo-item-store';

const TodoitemsReducer = (action) => {
  return [];
}



function App() {

  const [ToDoItem, setToDoItem] = useState([]);
  const [newTodoItem, dispatchTodoItem] = useReducer(TodoitemsReducer);

  // let HandleNewItem = (itemName, itemDate) => {
  //   const newTodoItems = [...ToDoItem, {
  //     name: itemName,
  //     DueDate: itemDate
  //   }]
  //   setToDoItem(newTodoItems)
  // }

  let newItem = (itemName, itemDate) => {
    setToDoItem((Curvalue) => [
      ...Curvalue,
      { name: itemName, DueDate: itemDate },
    ])
  }

  let deleteItem = (itemName) => {
    let newTodoItem = ToDoItem.filter(item => item.name !== itemName)
    setToDoItem(newTodoItem)
  }

  return (
    <TodoitemStore.Provider value={{
      toDoItem: ToDoItem,
      newItem: newItem,
      deleteItem: deleteItem,
    }}>
      <center>
        <Header Heading={'ToDo List App'} />
        <Addvalue />
        <WelcomMsg />
        <ToDoItems />
      </center>
    </TodoitemStore.Provider>
  )
}

export default App
