import React from 'react'
import './mainMenu.css'

const mainMenu = () => {
  return (
    <div className='main-menu'>
      <h1>Are you ready? </h1>
      <button onClick={() => window.location.href = '/quiz'} className='start-quiz'>
        <h1>Start Quiz</h1>
      </button>
    </div>
  )
}

export default mainMenu