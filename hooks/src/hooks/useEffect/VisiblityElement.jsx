import React, { useContext } from 'react'
import { themeContext } from '../../store/useContex'

function VisiblityElement() {

  const { bgColorCode, textColor } = useContext(themeContext)


  return (
    <center style={{ paddingTop: "250px", paddingBottom: "250px", backgroundColor: bgColorCode, color: textColor }}>
      Hereeeeeeeeeeeeeeeeeeee..........
    </center>
  )
}

export default VisiblityElement
