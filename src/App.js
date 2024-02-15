import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TesislerHomePage from './pages/TesislerHomePage/TesislerHomePage'
import TesislerList from './pages/TesislerList'

import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' index element={<TesislerList />} />
        <Route path='/home' index element={<TesislerHomePage />} />
      </Routes>
    </>
  )
}

export default App
