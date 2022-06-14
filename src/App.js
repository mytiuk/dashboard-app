import React, { useState } from 'react'
import { Context } from './hoc/Context/Context'
import { Navbar } from './UI/Navbar/Navbar'
import { Layout } from './hoc/Layout/Layout'
import { Cards } from './components/Cards/Cards'
import { Charts } from './components/Charts/Charts'
import { OrderList } from './components/OrderList/OrderList'
import { Customers } from './components/Customers/Customers'
import { themeHandler } from './style/style'
import './App.css'

function App() {
  const [turn, setTurn] = useState(false)

  return (
    <div className="App" style={themeHandler(turn)} >
      <Context>
        <Navbar onClick={() => setTurn(prev => !prev)} turn={turn}/>
        <Layout>
          <Cards/>
          <Charts/>
          <OrderList>
            <Customers/>
          </OrderList>
        </Layout>
      </Context>
    </div>
  )
}

export default App
