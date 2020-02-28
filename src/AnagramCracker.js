import React, { useState } from 'react'
import './index.css'

const AnagramCracker = () => {
  const baseUrl = 'http://localhost:3000'

  const [letters, setLetters] = useState(null)
  const [anagrams, setAnagrams] = useState(null)

  const fetchAnagrams = async letters => {
    var url = new URL(baseUrl + '/api/anagrams')
    url.searchParams.append('letters', letters)
    const response = await fetch(url)
    return await response.json()
  }

  const handleClick = () => {
    fetchAnagrams(letters).then(response => {
      setAnagrams(response)
    })
  }

  const handleChange = event => {
    setLetters(event.target.value)
  }

  const renderAnagrams = () => {
    return anagrams.map(anagram => {
      return <p>{anagram}</p>
    })
  }

  return (
    <>
      <div className="container">
        <h2>anagram cracker</h2>
        <label htmlFor="letter-input">letters</label>
        <input id="letter-input" type="text" onChange={handleChange}></input>
        <button onClick={handleClick}>submit</button>
        <h3>results</h3>
        {anagrams && renderAnagrams()}
      </div>
    </>
  )
}

export default AnagramCracker
