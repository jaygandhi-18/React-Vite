import Style from './WelcomeMsg.module.css'
import React, { useContext } from 'react'
import { TodoitemStore } from '../store/todo-item-store'

function WelcomMsg() {
  const ToDoArr = useContext(TodoitemStore);
  const todoItem = ToDoArr.toDoItem;
  return (
    todoItem.length === 0 && <div className={Style.welcome}>
      Enjoy Your Dayyy...
    </div>
  )
}

export default WelcomMsg