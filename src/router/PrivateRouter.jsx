import React from 'react'
import {Navigate,Outlet,useLocation} from "react-router-dom"
const PrivateRouter = () => {
    // const {state} = useLocation()
    const user =JSON.parse(localStorage.getItem("data")) 
  //  const person = user.filter((item)=>item===state)
  return (
    user ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRouter
