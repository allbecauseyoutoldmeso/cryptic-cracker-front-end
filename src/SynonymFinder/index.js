import React, { useState } from 'react'
import Results from '../shared/Results'
import { fetchSynonyms } from '../shared/apiRequests'

const SynonymFinder = () => {
  const [synonyms, setSynonyms] = useState(null)
  const [word, setWord] = useState(null)

  const handleChange = event => {
    setWord(event.target.value)
  }

  const handleClick = () => {
    fetchSynonyms(word).then(response => setSynonyms(response))
  }

  return (
    <>
      <label htmlFor="word-input">word</label>
      <input id="word-input" type="text" onChange={handleChange}></input>
      <button onClick={handleClick}>submit</button>
      <Results items={synonyms} />
    </>
  )
}

export default SynonymFinder
