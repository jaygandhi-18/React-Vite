import { useState } from 'react'
import React from 'react';
import InputBox from './components/InputBox';
import Buttons from './components/Buttons';
import Style from './App.module.css'

function App() {

  let [textToShow, setTextToShow] = useState([]);


  let handleOnClick = (event) => {
    if (event.target.innerText === "=") {
      let result = eval(textToShow.join(""));
      setTextToShow([result.toString()]);

    } else if (event.target.innerText === "c") {
      setTextToShow([])

    } else {
      let showText = event.target.innerText;
      let newTest = [...textToShow, showText]
      setTextToShow(newTest)
    }
  }

  const calcu = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "/", "=", "0", "c", "*",]
  return (
    <div className={Style.box}>
      <InputBox ShowingText={textToShow} />
      <Buttons Buttonss={calcu} handleOnClick={handleOnClick} />
    </div>
  )
}

export default App
