import React from 'react'
import { Cards } from '../components/Cards/Cards'
import { Charts } from '../components/Charts/Charts'
import { OrderList } from '../components/OrderList/OrderList'
import { Customers } from '../components/Customers/Customers'

export const Dashboard = () => {
  return (
    <div>
      <Cards/>
      <Charts/>
      <OrderList>
      <Customers/>
      </OrderList>
    </div>
  )
}
