import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <div className='github-repo'>
        <a href="https://github.com/ajoykumardas12/hello-firebase" target='_blank'>
          <img src="/icons8-github.svg" alt="GitHub" />
        </a>
      </div>
    </div>
  )
}

export default App
