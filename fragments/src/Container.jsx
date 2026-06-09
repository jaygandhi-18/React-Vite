import React from 'react'
import Style from './Container.module.css'

function Container({ children }) {
  return (
    <div className={Style.box}>
      {children}
    </div>
  )
}

export default Container
