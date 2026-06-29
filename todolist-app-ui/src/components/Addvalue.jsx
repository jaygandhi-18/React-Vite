import React, { useRef, useContext } from 'react'
import { IoAdd } from "react-icons/io5";
import Style from '../App.module.css';
import { TodoitemStore } from '../store/todo-item-store'


function Addvalue() {

  const ToDoArr = useContext(TodoitemStore);
  const newItem = ToDoArr.newItem;

  const todoNameElement = useRef('')
  const dueDateElement = useRef('')

  let HandleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value
    const dueDate = dueDateElement.current.value
    todoNameElement.current.value = ""
    dueDateElement.current.value = ""
    newItem(todoName, dueDate)
  }

  return (
    <div className={`${Style.tdrow}`}>
      <form
        className="row"
        onSubmit={HandleAddButtonClick}>
        <div className="col-6">
          <input
            type='text'
            ref={todoNameElement}
            placeholder='Enter ToDo Here...'>
          </input>
        </div>
        <div className="col-4">
          <input
            type='date'
            ref={dueDateElement}></input>
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`${Style.tdbutton} btn btn-success td-button`}>
            <IoAdd />
          </button>
        </div>
      </form >
    </div >
  )
}

export default Addvalue
