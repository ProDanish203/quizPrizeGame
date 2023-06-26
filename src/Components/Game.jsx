import React, { useState } from 'react'
import { Quiz } from './Quiz';
import { PriceBar } from './PriceBar';
import { useLocation } from 'react-router-dom';

export const Game = () => {

    const location = useLocation()
    const name = location.state.name;
    console.log(name)

    const [questionNo, setQuestionNo] = useState(0);
    const [timer, setTimer] = useState(false);

  return (
    <>
    <div className='flex'>
      <Quiz questionNo={questionNo} setQuestionNo={setQuestionNo} timer={timer} setTimer={setTimer}/>
      <PriceBar questionNo={questionNo} name={name}/>
    </div>
    </>
  )
}
