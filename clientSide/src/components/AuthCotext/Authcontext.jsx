import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'


export const AuthContextProvide = createContext() ;

const Authcontext = ({children}) => {
    const [privacy, setPrivacy] = useState(false) ;

    const [userData, setuserData] = useState([])
    
    // login auth
    const loginSuccess = () => {
         const token = JSON.parse(localStorage.getItem("token"))
         if(token){
             setPrivacy(true)
             return true ;
         }
         return false ;
    }

// getData auth 

const url = "http://localhost:5000/" ;
const cache = {} ;

const getData = async(id) => {
    
    const data =  await fetch(`${url}${id}`) ;
    // console.log(data)
    
    return data ;
}
// console.log(cache)

  return (
   <AuthContextProvide.Provider value={{loginSuccess,getData, userData ,privacy}}>{children}</AuthContextProvide.Provider>
  )
}

export default Authcontext
