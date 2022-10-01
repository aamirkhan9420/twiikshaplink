import React, { useState } from 'react'

export const AppContext=React.createContext()
export default function AppContextProvider({children}) {
    let [email,setEmail]=useState()
    let HandleAuth=(x)=>{
        setEmail(x)
       console.log(email)
    }
  return (
    <div>
        <AppContext.Provider value={{email,HandleAuth}} >
            {children}
        </AppContext.Provider>
    </div>
  )
}
