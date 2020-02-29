import React from 'react'
import ReactDOM from 'react-dom'
import AnagramCracker from './AnagramCracker'
import PatternMatcher from './PatternMatcher'

const Home = () => {
  return (
    <>
      <AnagramCracker />
      <PatternMatcher />
    </>
  )
}

ReactDOM.render(<Home />, document.getElementById('root'))
