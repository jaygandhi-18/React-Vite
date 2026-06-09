import React from 'react'
import Style from './Buttons.module.css'

function Buttons({ Buttonss, handleOnClick }) {


  return (
    <div>
      {Buttonss.map((item) => (<button
        key={item}
        className={Style.buts}
        onClick={handleOnClick}
      >
        {item}
      </button>))}
    </div>
  )
}

export default Buttons
