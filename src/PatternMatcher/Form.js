import React from 'react'
import '../index.css'
import { ascendingArray } from './helpers.js'

const Form = ({ length, handleSubmit }) => {
  const renderInputs = () => {
    return ascendingArray(parseInt(length)).map(num => {
      return (
        <input
          key={num}
          type="input"
          maxLength="1"
          className="single-character-input"
        />
      )
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="single-character-inputs">{renderInputs()}</div>
      <button type="submit">submit</button>
    </form>
  )
}

export default Form
