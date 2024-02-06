import React, { useCallback, useEffect, useState } from 'react'
import './Dice.css'

function Dice(props) {
  const [dots, setDots] = useState([])
  const createDiceFace = () => {
    const diceFace = []

    /*
    for (let i = 0; i < props.dots; i++) {
      for (let j = 0; j < i; j++) {
        diceFace.push(<span key={`empty-${j}`} className='empty-dot'/>)
      }
      diceFace.push(<h1 key={`dot-${i}`} className='diagonal-dot'>.</h1>)
    }
    */
   for (let i = 1; i < props.dots + 1; i++) {
      diceFace.push(<span key={`dot-${i}`} className={`dot-${i}`}>•</span>)
   }

   for (let j = props.dots + 1; j < 10; j++) {
      diceFace.push(<span key={`dot-${j}`} className={`dot-${j}`}></span>)
   }

    return diceFace
  }

  useEffect(() => {
    console.log('props.dots', props.dots)
    setDots(createDiceFace())
  }, [])
    
  return (
    <div className={`dice-${props.dots} dice`}>
        {dots}
    </div>
  )
}

export default Dice