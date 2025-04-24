import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import MainMenu from './Components/MainMenu/MainMenu'

function App() {


  return (
      <div>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/main-menu" element={<MainMenu />} />
          </Routes>
      </div>
   
  )
}

export default App
