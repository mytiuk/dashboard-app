import React, {useState, createContext} from "react"

export const DashboardContext = createContext()

export const Context = ({children}) => {

  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => {
    setToggle(prev => !prev)
  }
  return (
    <DashboardContext.Provider value={{toggle, toggleHandler}}>
      {children}
    </DashboardContext.Provider>
  )
}
