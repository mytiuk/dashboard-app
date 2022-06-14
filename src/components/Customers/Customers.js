import React, {useState} from 'react'
import { people } from '../../image/image'
import './Customers.css'

export const Customers = () => {

  const [customers, setCustomers] = useState([
    {name: 'Nick', country: 'England', img: people[0]},
    {name: 'Mark', country: 'Spain', img: people[1]},
    {name: 'Olivia', country: 'Germany', img: people[3]},
    {name: 'Den', country: 'Poland', img: people[2]},
    {name: 'John', country: 'France', img: people[0]},
    {name: 'Robert', country: 'Poland', img: people[1]},
    {name: 'Victoria', country: 'Greece', img: people[3]},
    {name: 'Brad', country: 'Ukraine', img: people[2]},
    {name: 'Alan', country: 'Turkey', img: people[0]},
  ])

  const renderCustomers = () => {
    return customers.map((customer, index) => (
      <tr key={index}>
      <td><div className='imgBox'><img src={customer.img}/></div></td>
      <td><h4>{customer.name}</h4></td>
      <td><span className='country'>{customer.country}</span></td>
    </tr>
    ))
  }

  return (
    <div className='customers'>
      <div className='cardHeader'>
        <h2>Recent Customers</h2>
      </div>
      <table>
        <tbody>
          {renderCustomers()}
        </tbody>
      </table>
    </div>
  )
}
