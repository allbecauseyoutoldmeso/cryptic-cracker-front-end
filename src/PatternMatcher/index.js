import React, { useState } from 'react'
import NumberSelector from './NumberSelector'
import Form from './Form'
import Results from '../shared/Form/Results'
import { fetchMatches } from '../shared/apiRequests'
import { ascendingArray } from './helpers.js'

const PatternMatcher = () => {
  const [length, setLength] = useState(null)
  const [matches, setMatches] = useState(null)

  const handleChange = event => {
    setLength(event.target.value)
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

  return (
    <>
      <NumberSelector maximum={45} onChange={handleChange} />
      {length && <Form length={length} handleSubmit={handleSubmit} />}
      <Results items={matches} />
    </>
  )
}

export default PatternMatcher
