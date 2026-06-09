import React from 'react'
import Style from './Item.module.css'

function Item({ fooditem, bought, HandleOnClick }) {


  return (
    <div>
      <li className={`${Style.hfitem} list-group-item ${bought && 'active'}`}>{fooditem}

        <button className={`${Style.hfbuts} btn-info btn`} onClick={HandleOnClick}>Done</button>
      </li>
    </div>
  )
}

export default Item
