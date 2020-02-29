import React from 'react'

const Results = ({ items }) => {
  const renderList = () => {
    return items.map((item, index) => {
      return <li key={index}>{item}</li>
    })
  }

  return (
    <>
      <h3>results</h3>
      {items && <ul>{renderList()}</ul>}
    </>
  )
}

export default Results
