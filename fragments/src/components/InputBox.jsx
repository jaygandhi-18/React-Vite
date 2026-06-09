import React from 'react'
import Style from './InputBox.module.css'

function InputBox({ handleKeyDown }) {

  return (
    <div>
      <input
        className={`${Style.textatrea}`}
        type='text'
        placeholder='Type Here..'
        onKeyDown={handleKeyDown}>

      </input>
    </div>
  )
}

export default InputBox
