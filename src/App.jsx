import { useState } from 'react'
import './App.css'
import Dice from './components/Dice'

function App() {
  const [dots, setDots] = useState(3);

  function getRandomInt() {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1)
  }

  return (
    <>
      <div className='board1'>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
      </div>
      <div className='board2'>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
        <Dice dots={getRandomInt()}/>
      </div>
    </>
  )
}

export default App
