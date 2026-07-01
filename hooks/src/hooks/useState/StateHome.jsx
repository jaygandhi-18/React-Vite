import React, { useContext } from 'react'
import { themeContext } from '../../store/useContex'
import { useNavigate } from 'react-router'

function StateHome() {
  const { bgColorCode, textColor, dualVal } = useContext(themeContext)

  const navigate = useNavigate()
  //IMportant Hook of react-router for navigation

  return (
    <center style={{ paddingTop: "250px", paddingBottom: "250px", backgroundColor: bgColorCode, color: textColor }}>
      <h1>
        useState
      </h1>
      <button className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`} onClick={() => navigate("/useState/Counter")} >Counter</button>
      <button className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`} onClick={() => navigate("/useState/TextArea")} >TextArea</button>
      <button className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`} onClick={() => navigate("/useState/CheckBox")} >CheckBox</button>
      <button className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`} onClick={() => navigate("/useState/From")} >From</button>
    </center>
  )
}

export default StateHome
