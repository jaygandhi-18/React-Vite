import React, { useContext, useState } from 'react'
import { themeContext } from '../../store/useContex'

function From() {

  const { bgColorCode, textColor, dualVal } = useContext(themeContext)

  const [name, setName] = useState("Jay")
  const [age, setAge] = useState(20)
  const handleOnChange = (e) => {
    setName(e.target.value)
  }
  return (
    <center style={{ paddingTop: "250px", paddingBottom: "250px", backgroundColor: bgColorCode, color: textColor }}>
      <input type='textarea' onChange={handleOnChange}></input>
      <button className={`btn btn-${dualVal ? "dark" : "light"} text-end hookbuttons`} onClick={() => (setAge(age + 1))}>
        incremant
      </button>
      <div>My name is {name} and age is {age}</div>

    </center>
  )
}

export default From

