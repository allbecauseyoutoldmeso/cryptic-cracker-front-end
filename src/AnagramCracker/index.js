import React, { useState } from 'react'
import Results from '../shared/Results'
import { fetchAnagrams } from '../shared/apiRequests'
import '../index.css'

const AnagramCracker = () => {
  const [letters, setLetters] = useState(null)
  const [anagrams, setAnagrams] = useState(null)

  const handleClick = () => {
    fetchAnagrams(letters).then(response => {
      setAnagrams(response)
    })
  }

  const handleChange = event => {
    setLetters(event.target.value)
  }

  return (
    <>
      <div className="container">
        <h2>anagram cracker</h2>
        <label htmlFor="letter-input">letters</label>
        <input id="letter-input" type="text" onChange={handleChange}></input>
        <button onClick={handleClick}>submit</button>
        <Results items={anagrams} />
      </div>
    </>
  )
}

export default AnagramCracker
