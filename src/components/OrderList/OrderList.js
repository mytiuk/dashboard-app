import React, {useState} from 'react'
import './OrderList.css'

export const OrderList = ({children}) => {

  const [details, setDetails] = useState([
    {name: 'Star Refrigirator', price: '$1100', payment: 'Paid', status: 'delivered'},
    {name: 'Speakers', price: '$300', payment: 'Due', status: 'pending'},
    {name: 'Hair Dryer', price: '$150', payment: 'Paid', status: 'in progress'},
    {name: 'TV', price: '$1300', payment: 'Paid', status: 'return'},
    {name: 'Apple Watch', price: '$700', payment: 'Due', status: 'in progress'},
    {name: 'Electro Scooter', price: '$1500', payment: 'Paid', status: 'delivered'},
    {name: 'Nike Shoes', price: '$60', payment: 'Paid', status: 'delivered'},
    {name: 'MacBook', price: '$800', payment: 'Due', status: 'pending'},
    {name: 'Casual Shoes', price: '$120', payment: 'Paid', status: 'return'},
    {name: 'Car Wheels', price: '$400', payment: 'Paid', status: 'delivered'},
    {name: 'Microvawe Heater', price: '$180', payment: 'Due', status: 'pending'},
  ])

  const renderDetails = () => {
   return details.map((detail, index) => (
    <tr key={index}>
      <td>{detail.name}</td>
      <td>{detail.price}</td>
      <td>{detail.payment}</td>
      <td><span id='status' className={`status ${detail.status}`}>{detail.status}</span></td>
    </tr>
   ))
  }

  return (
    <div className='details'>
      <div className='recentOredrs'>
        <div className='cardHeader'>
          <h2>Recent Orders</h2>
          <a href='/' className='btn'>View All</a>
        </div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Payment</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {renderDetails()}
          </tbody>
        </table>
      </div>
      {children}
    </div>
  )
}
