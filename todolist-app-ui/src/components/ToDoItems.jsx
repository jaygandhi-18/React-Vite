import React, { useContext } from 'react'
import Curvalue from './Curvalue'
import { TodoitemStore } from '../store/todo-item-store'

function ToDoItems({ onDeleteClick }) {
  const ToDoArr = useContext(TodoitemStore);
  const todoItem = ToDoArr.toDoItem;
  return (
    <div>
      {todoItem.map((item) => (<Curvalue key={item.name} ToDoName={item.name} ToDoDate={item.DueDate} onDeleteClick={onDeleteClick} />))}

    </div>
  )
}

export default ToDoItems
