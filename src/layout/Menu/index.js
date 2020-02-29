import React from 'react'
import Button from './Button'

const Menu = ({ setGadget, gadget }) => {
  const handleClick = event => {
    setGadget(event.target.value)
  }

  return (
    <div className="menu-container">
      <Button
        handleClick={handleClick}
        gadget={gadget}
        value="anagramCracker"
        label="anagram cracker"
      />
      <Button
        handleClick={handleClick}
        gadget={gadget}
        value="patternMatcher"
        label="pattern matcher"
      />
      <Button
        handleClick={handleClick}
        gadget={gadget}
        value="definitionFinder"
        label="definitions"
      />
      <Button
        handleClick={handleClick}
        gadget={gadget}
        value="synonymFinder"
        label="synonyms"
      />
    </div>
  )
}

export default Menu
