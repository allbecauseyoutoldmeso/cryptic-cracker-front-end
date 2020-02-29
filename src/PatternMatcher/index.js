import React, { useState } from 'react'
import NumberSelector from './NumberSelector'
import Form from './Form'
import { ascendingArray } from './helpers.js'
import '../index.css'

const PatternMatcher = () => {
  const [length, setLength] = useState(null)
  const [matches, setMatches] = useState(null)
  const baseUrl = process.env.REACT_APP_BACKEND_URL

  const handleChange = event => {
    setLength(event.target.value)
  }

  const fetchMatches = async pattern => {
    var url = new URL(baseUrl + '/api/matches')
    url.searchParams.append('pattern', pattern)
    const response = await fetch(url)
    return response.json()
  }

  const handleSubmit = event => {
    event.preventDefault()

    const inputValues = ascendingArray(parseInt(length)).map(num => {
      return event.target.elements[num - 1].value
    })

    var pattern = ''

    inputValues.forEach(value => {
      if (value === '') {
        pattern += '_'
      } else {
        pattern += value
      }
    })

    fetchMatches(pattern).then(response => {
      setMatches(response)
    })
  }

  const renderMatches = () => {
    return matches.map(match => {
      return <p>{match}</p>
    })
  }

  return (
    <div className="container">
      <h2>pattern matcher</h2>
      <NumberSelector maximum={45} onChange={handleChange} />
      {length && <Form length={length} handleSubmit={handleSubmit} />}
      {matches && renderMatches()}
    </div>
  )
}

export default PatternMatcher
