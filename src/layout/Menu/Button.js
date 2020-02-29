import React from 'react'

const Button = ({ value, label, handleClick, gadget }) => {
  const className = value === gadget ? 'selected-menu-item' : 'menu-item'

  return (
    <button onClick={handleClick} className={className} value={value}>
      {label}
    </button>
  )
}

export default Button
