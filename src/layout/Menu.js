import React from 'react'

const Menu = ({ setGadget }) => {
  const handleClick = event => {
    setGadget(event.target.value)
  }

  return (
    <div className="menu-container">
      <button
        onClick={handleClick}
        className="menu-item"
        value="anagramCracker"
      >
        anagram cracker
      </button>
      <button
        onClick={handleClick}
        className="menu-item"
        value="patternMatcher"
      >
        pattern matcher
      </button>
      <button onClick={handleClick} className="menu-item" value="definitions">
        definitions
      </button>
      <button onClick={handleClick} className="menu-item" value="synonyms">
        synonyms
      </button>
    </div>
  )
}

export default Menu
