import { useEffect, useState } from 'react'
import './App.css'
import Dice from './components/Dice'

function App() {
  const [board1Row1, setBoard1Row1] = useState([])


  function getRandomInt() {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1)
  }

  function addDice(row) {
    const newDice = getRandomInt()
    if (board1Row1.length < 3) {
      setBoard1Row1([...row, newDice])
    }
    console.log('Board details', board1Row1)
  }

  return (
    <>
      <div className='board1'>
        <button className='board1-row1' onClick={() => addDice(board1Row1)}>
          {board1Row1.map((dots, index) => {
            return <Dice key={index} dots={dots}/>
          })}
        </button>
        <div className='board1-row2'>
          <Dice dots={getRandomInt()}/>
          <Dice dots={getRandomInt()}/>
          <Dice dots={getRandomInt()}/>
        </div>
        <div className='board1-row3'>
          <Dice dots={getRandomInt()}/>
          <Dice dots={getRandomInt()}/>
          <Dice dots={getRandomInt()}/>
        </div>
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
