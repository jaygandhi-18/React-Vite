import React from 'react'

function ConnectionMsg() {
  return {
    connect() {
      console.log(`connectiong to ${'page1'} at this  ${'url'}`)
    },
    disconnect() {
      console.log(`discoonected from ${'page1'} from ${'this url'}`)
    }
  }
}

export default ConnectionMsg
