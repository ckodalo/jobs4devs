import React from 'react'

function Card(cards) {
  console.log(cards)
  return (
    <div className='card'>
      <h2>Title</h2>
      <h3>Organization</h3>
      <a href='google.com'>Location</a>
    </div>
  )
}

export default Card