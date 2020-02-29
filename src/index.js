import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import AnagramCracker from './AnagramCracker'
import PatternMatcher from './PatternMatcher'
import Menu from './layout/Menu'
import './index.css'

const Home = () => {
  const [gadget, setGadget] = useState(null)

  const renderGadget = () => {
    switch (gadget) {
      case 'anagramCracker':
        return <AnagramCracker />
      case 'patternMatcher':
        return <PatternMatcher />
    }
  }

  return (
    <div>
      <Menu setGadget={setGadget} />
      {renderGadget()}
    </div>
  )
}

ReactDOM.render(<Home />, document.getElementById('root'))
