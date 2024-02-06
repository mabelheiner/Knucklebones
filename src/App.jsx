import { useState } from 'react'
import './App.css'
import Dice from './components/Dice'

function App() {
  const [dots, setDots] = useState(3);

  return (
    <>
      <Dice dots={1}/>
      <Dice dots={2}/>
      <Dice dots={3}/>
      <Dice dots={4}/>
      <Dice dots={5}/>
      <Dice dots={6}/>
      <Dice dots={7}/>
      <Dice dots={8}/>
      <Dice dots={9}/>
    </>
  )
}

export default App
