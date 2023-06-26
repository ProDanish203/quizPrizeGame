import React from 'react'
import { Home } from "../Components/Home";
import { Game } from "../Components/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/play" element={<Game/>}/>
    </Routes>
    </BrowserRouter>
  )
}
