import React from 'react'
import Vrbutton from './Vrbutton'
import Head from './Head'
import Random from './Random'

function App() {
  return (
    <div>
      <h1>Helloo</h1>
      <Head />
      <Random />
      <Random />
      <Random />
      <Vrbutton></Vrbutton>
      <div className='grid text-center'>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>

        <button type="button" className="btn btn-link">Link</button>
      </div>
    </div>
  )
}

export default App
