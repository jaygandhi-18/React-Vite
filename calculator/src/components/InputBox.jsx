import React from 'react'
import Style from './InputBox.module.css'


function InputBox({ ShowingText }) {
  return (
    <>
      <div className={Style.inpbox}>
        <input value={ShowingText.join("")} readOnly></input>
      </div>
    </>
  )
}

export default InputBox
