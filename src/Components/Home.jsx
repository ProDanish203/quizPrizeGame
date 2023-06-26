import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const [name, setName] = useState("")
    const navigate = useNavigate();

    const play = () => {
        navigate("/play", {state: {
            name
        }})
    } 

  return (
    <>
    <div className='w-[100vw] h-[100vh] bg-main-bg bg-no-repeat bg-center bg-cover flex items-center justify-center'>
        <div className='flex flex-col gap-3 items-center justify-center max-w-[300px] w-full px-2'>

        <input 
        type="text" 
        placeholder='Name' 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className='px-2 py-2 outline-none rounded-sm w-full'
        />
        <button 
        className='bg-purple-500 px-5 text-white py-2 cursor-pointer rounded-md shadow-2xl w-full'
        onClick={play}
        >
            Play Game
        </button>
        </div>
    </div>
    </>
  )
}
