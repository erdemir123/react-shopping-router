import React from 'react'
import { useContext } from 'react'
import MainContex from '../Context/MainContex'
import data from "../data"
import Card from './Card'
const Electronic = ({}) => {
  const {setFavorList,favorList,basket,setBasket } =useContext(MainContex)
  const electronicProduct= data.filter((item)=>item.type === "Electronic")
  console.log(electronicProduct)
  return (
    <div className='flex flex-wrap px-4 bg-orange-200'>
      {electronicProduct.map((item,index)=> <Card item={item} key={index} setFavorList = {setFavorList} favorList={favorList} basket={basket} setBasket={setBasket}/>)}
    </div>
  )
}

export default Electronic
