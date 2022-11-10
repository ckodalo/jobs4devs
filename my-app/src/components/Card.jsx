import React from 'react'

function Card( {cards}) {
  return (
    <div>
      {cards.map((card) => (
        <div key={card.id} className='card'>
          <h2 className='title'>{card.title}</h2>
          <h2 className='organization'>{card.id}</h2>
        </div>
        
      ))}
      
    </div>
  )
}

export default Card