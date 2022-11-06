import React from 'react'
import { useContext } from 'react'
import MainContex from '../Context/MainContex'
import data from "../data"
import Card from './Card'

const Laptop = () => {
  const {setFavorList,favorList,basket,setBasket} =useContext(MainContex)
  const laptopProduct = data.filter(item=>item.type === "Computer")
  return (
    <div className='flex flex-wrap px-8 bg-orange-200'>
      {laptopProduct.map((item,index)=> <Card item={item} key={index} setFavorList = {setFavorList} favorList={favorList} basket={basket} setBasket={setBasket}/>)}
    </div>
  )
}

export default Laptop
