import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Quiz from '../components/Quiz'
import Result from '../components/Result'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Quiz/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </div>
  )
}

export default App
