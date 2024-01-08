import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TesislerHomePage from './pages/TesislerHomePage/TesislerHomePage'

import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' index element={<TesislerHomePage />} />
      </Routes>
    </>
  )
}

export default App
