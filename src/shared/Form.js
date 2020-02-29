import React, { useState } from 'react'
import Results from './Results'

const Form = ({ fetchResults, label }) => {
  const [results, setResults] = useState(null)
  const [input, setInput] = useState(null)

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleClick = () => {
    fetchResults(input).then(response => setResults(response))
  }

  return (
    <>
      <label htmlFor="input">{label}</label>
      <input id="input" type="text" onChange={handleChange}></input>
      <button onClick={handleClick}>submit</button>
      <Results items={results} />
    </>
  )
}

export default Form
