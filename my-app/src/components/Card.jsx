import React from 'react'

function Card( {cards}) {
  return (
    <div>
      {cards.map((card) => (
        <div key={card.id} className='card'>
          <h2>{card.title}</h2>
          <h2>{card.id}</h2>
        </div>
        
      ))}
      
    </div>
  )
}

export default Card