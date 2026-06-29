import React from 'react'

function Random() {

  let number = Math.random() * 10

  return (
    <div>
      <h2 style={{ 'background-color': '#ffb700' }}>Your Random Number is {Math.round(number)} </h2>
    </div>
  )
}

export default Random
