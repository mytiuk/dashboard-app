import React from 'react'
import './Search.css'

export const Search = () => {
  return (
    <div className='search'>
    <label>
      <input type='text' placeholder='Search Here'/>
      <ion-icon name="search-outline"></ion-icon>
    </label>
  </div>
  )
}
