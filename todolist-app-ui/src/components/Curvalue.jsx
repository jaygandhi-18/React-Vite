import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import Style from '../App.module.css';
import { TodoitemStore } from '../store/todo-item-store';


function Curvalue({ ToDoName, ToDoDate }) {
  const ToDoArr = useContext(TodoitemStore);
  const deleteItem = ToDoArr.deleteItem;
  return (
    <div className={`${Style.tdrow}`}>
      <div className="row">
        <div className="col-6">
          {ToDoName}
        </div>
        <div className="col-4">
          {ToDoDate}
        </div>
        <div className={`${Style.tdbutton} col-2`}>
          <button type="button" className={`${Style.tdbutton} btn btn-danger`} onClick={() => { deleteItem(ToDoName) }}><MdDeleteForever /></button>
        </div>
      </div>
    </div>
  )
}

export default Curvalue
