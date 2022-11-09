import './App.css';
// import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {

  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json)) 

  return (
    <div className='cards'>
      <Card />
    </div>
  )
}

export default App;
