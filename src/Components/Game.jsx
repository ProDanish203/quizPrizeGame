import React, { useEffect, useState } from 'react'
import { Quiz } from './Quiz';
import { PriceBar } from './PriceBar';
import { useLocation } from 'react-router-dom';

export const Game = () => {

    const location = useLocation()
    const name = location.state.name;

    const [questionNo, setQuestionNo] = useState(0);
    const [timer, setTimer] = useState(false);
    const [earned, setEarned] = useState(0);
    const [quesTime, setQuestTime] = useState(30);

    useEffect(() => {
      const interval = setInterval(() => {
        setQuestTime(prev => prev--)
      }, 10000)
    })

  return (
    <>
    <div className='flex'>

      {timer ? (
        <div className='bg-main-bg bg-no-repeat bg-center bg-cover flex items-center justify-center w-[100vw] h-[100vh]'>

        <h1 className='text-white text-3xl font-bold text-center'>Game Over!! <br />
        You earned: ${earned}
        </h1>
        </div>
      ) : (
        <>
        <Quiz questionNo={questionNo} setQuestionNo={setQuestionNo} timer={timer} setTimer={setTimer} setEarned={setEarned} quesTime={quesTime}/>
        <PriceBar questionNo={questionNo} name={name}/>
        </>
      )}

      
    </div>
    </>
  )
}
