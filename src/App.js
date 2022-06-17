import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Context } from './hoc/Context/Context'
import { Navbar } from './UI/Navbar/Navbar'
import { Layout } from './hoc/Layout/Layout'
import { Dashboard } from './container/Dashboard'
import { themeHandler } from './style/style'
import './App.css'

function App() {
  const [turn, setTurn] = useState(false)

  return (
    <div className="App" style={themeHandler(turn)} >
      <Context>
        <Navbar onClick={() => setTurn(prev => !prev)} turn={turn}/>
        <Layout>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
          </Routes>
        </Layout>
      </Context>
    </div>
  )
}

export default App
