import React from 'react'
import { ascendingArray } from './helpers'

const NumberSelector = ({ maximum, onChange }) => {
  const renderOptions = () => {
    return ascendingArray(maximum).map(num => {
      return (
        <option key={num} value={num}>
          {num}
        </option>
      )
    })
  }

  return (
    <>
      <label htmlFor="number-select">word length</label>
      <select onChange={onChange} id="number-select">
        <option key="placeholder" value="placeholder" disabled>
          select
        </option>
        {renderOptions()}
      </select>
    </>
  )
}

export default NumberSelector
