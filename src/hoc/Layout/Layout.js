import React, {useContext} from 'react'
import { MenuToggle } from '../../UI/MenuToggle/MenuToggle'
import { Search } from '../../UI/Search/Search'
import { User } from '../../UI/User/User'
import { DashboardContext } from '../Context/Context'
import './Layout.css'

export const Layout = ({children}) => {
  
  const {toggle, toggleHandler} = useContext(DashboardContext)

  return (
    <div className={toggle ? 'layout active' : 'layout'}>
      <div className='topbar'>
        <MenuToggle onClick={toggleHandler}/>
        <Search/>
        <User/>
      </div>
      {children}
    </div>
  )
}

