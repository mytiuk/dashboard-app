import React from 'react'
import './Cards.css'

export const Cards = () => {

  const cards = [
    {number: 784, name: 'Daily Views', icon: "eye-outline"},
    {number: 56, name: 'Sales', icon: "cart-outline"},
    {number: 156, name: 'Comments', icon: "chatbubble-ellipses-outline"},
    {number: '$2,232', name: 'Earning', icon: "cash-outline"}
  ]

  return (
    <div className='cardBox'>
      {cards.map((card, index) => (
        <div className='card' key={index}>
          <div>
            <div className='numbers'>{card.number}</div>
            <div className='cardName'>{card.name}</div>
          </div>
          <div className='iconBox'>
            <ion-icon name={card.icon}></ion-icon>
          </div>
        </div>
       ))
      }
    </div>
  )
}