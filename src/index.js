import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import AnagramCracker from './AnagramCracker'
import PatternMatcher from './PatternMatcher'
import SynonymFinder from './SynonymFinder'
import DefinitionFinder from './DefinitionFinder'
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
      case 'synonymFinder':
        return <SynonymFinder />
      case 'definitionFinder':
        return <DefinitionFinder />
      default:
        return null
    }
  }

  return (
    <div>
      <Menu setGadget={setGadget} gadget={gadget} />
      <div className="gadget-container">{renderGadget()}</div>
    </div>
  )
}

ReactDOM.render(<Home />, document.getElementById('root'))
