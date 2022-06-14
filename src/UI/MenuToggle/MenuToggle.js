import React from 'react'
import './MenuToggle.css'

export const MenuToggle = ({onClick}) => {

  return (
    <div className='toggle'>
      <ion-icon name="menu-outline" onClick={onClick}></ion-icon>
    </div>
  )
}
