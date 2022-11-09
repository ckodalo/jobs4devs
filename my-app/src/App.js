import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [card, setCard] = useState([])

  useEffect(() => {
    
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => setCard(data)) 
  }, [card]) 

  return (
    <div className='cards'>
      <Card />
    </div>
  )
}

export default App;
