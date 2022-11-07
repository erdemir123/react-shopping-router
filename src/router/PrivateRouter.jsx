import React from 'react'
import { useContext } from 'react'
import {Navigate,Outlet} from "react-router-dom"
import MainContex from '../Context/MainContex'
const PrivateRouter = () => {
    const {currentUser}=useContext(MainContex)
    
  return (
    currentUser ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRouter
