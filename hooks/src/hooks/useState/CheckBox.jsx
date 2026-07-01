import React, { useContext, useState } from 'react'
import { themeContext } from '../../store/useContex'

function CheckBox() {

  const { bgColorCode, textColor, dualVal } = useContext(themeContext)

  const [check, setCheck] = useState(true)
  const handleOnChnage = () => {
    setCheck(!check)
  }
  return (
    <center style={{ paddingTop: "250px", paddingBottom: "250px", backgroundColor: bgColorCode, color: textColor }}>
      <input type='checkbox' checked={check} onChange={handleOnChnage}></input>
      <div>check value is {check ? "check" : "unCheck"}.</div>
    </center>
  )
}

export default CheckBox
