import React, {useState, useContext, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { DashboardContext } from '../../hoc/Context/Context'
import './Navbar.css'

export const Navbar = ({onClick, turn}) => {
  
  const [list, setList] = useState([
    {name: 'Brand name', icon: "logo-bitbucket"},
    {name: 'Dashboard', icon: "home-outline", style: 'hovered'},
    {name: 'Castomers', icon: "people-outline"},
    {name: 'Message', icon: "chatbubble-ellipses-outline"},
    {name: 'Help', icon: "help-outline"},
    {name: 'Settings', icon: "settings-outline"},
    {name: 'Password', icon: "key-outline"},
    {name: 'Sing out', icon: "log-out-outline"},
    {name: 'Dark theme', icon: "sunny-outline"},
  ])

  const {toggle} = useContext(DashboardContext)

  const liHoverHandler = (index) => {
    const style = [...list]
    style.forEach(item => delete item.style)
    style[index].style = 'hovered'
    setList([...style])
  }

  useEffect(() => {
    const theme = [...list]
    if(turn) {
      theme[theme.length - 1].name = 'Light theme'
      theme[theme.length - 1].icon = "sunny-outline"
      setList([...theme])
    } else {
      theme[theme.length - 1].name = 'Dark theme'
      theme[theme.length - 1].icon = "moon-outline"
      setList([...theme])
    }
  }, [turn])

  const renderList = () => {
    return list.map((item, index) => {
      return (
        <li key={index} className={item.style} onMouseOver={() => liHoverHandler(index)}>
            {index === list.length - 1 
              ?  <div className='theme' onClick={onClick}>
                  <span className='icon'><ion-icon name={item.icon}></ion-icon></span>
                  <span className='title'>{item.name}</span>
                 </div>
              : <NavLink to='/'>
                  <span className='icon'><ion-icon name={item.icon}></ion-icon></span>
                  <span className='title'>{item.name}</span>
                </NavLink>
            } 
        </li>
      )
    })
  }

  return (
      <div className='container'>
        <div className={toggle ? 'navigation hidden' : 'navigation'}>
          <ul>
            {renderList()}
          </ul>
        </div>
      </div>
  )
}
