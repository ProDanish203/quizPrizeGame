import React, { useEffect, useState } from 'react'
import { data } from "../Assets/data";
import { useNavigate } from 'react-router-dom';

export const Quiz = ({ questionNo, setQuestionNo, timer, setTimer }) => {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer");
    const [correct, setCorrect] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        setQuestion(data[questionNo])
    }, [questionNo])
    
    const selectAnswer = (ans) => {
        setSelectedAnswer(ans)
        setTimeout(() => {
            if(question.answer === ans){
                setClassName("answer correct")
                setCorrect(true);
            }
            else{
                setClassName("answer wrong");
                setCorrect(false);
            }
        }, 500);

        setTimeout(() => {
            if(!correct){
                setQuestionNo(prev => prev+1);
                setSelectedAnswer(null);
            }
            else if(correct){
                alert("Game Over")
                // navigate("/");
            }
        }, 4000);

    }

  return (
    <>
    <div className='bg-main-bg bg-no-repeat bg-center bg-cover w-full min-h-[100vh]'>

        <div className='relative w-full h-full flex flex-col justify-end pb-10 sm:px-10 px-3'>

            <div className='bg-transparent rounded-full flex items-center justify-center text-white font-bold text-xl border-gray-200 border-2 w-16 h-16 mb-10'>
                50
            </div>

            <div className='bg-purple-900 w-full text-center py-4 rounded text-md text-white font-semibold question'>
                <p>{question?.question}?</p>
            </div>

            <div className='grid grid-cols-2 gap-3 place-items-center my-5'>
                {
                    question?.options?.map((option, idx) => (
                        <div 
                        className={`${selectedAnswer === option ? `bg-[#9e0b9e] ${className}` :  "bg-purple-800"}  w-full text-center rounded-md py-3 text-white cursor-pointer `}
                        key={idx}
                        onClick={() => selectAnswer(option)}
                        >{option}</div>
                    ))
                }

            </div>

        </div>

    </div>
    </>
  )
}
