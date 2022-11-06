import React, { useContext } from 'react'
import MainContex from '../Context/MainContex'
import data from '../data'
import Card from './Card'

const Phone = () => {
  const {setFavorList,favorList,basket,setBasket} = useContext(MainContex)
  const phoneProduct = data.filter(item=>item.type ==="Phone")
  return (
    <div className='flex flex-wrap px-4 bg-orange-200'>
      {phoneProduct.map((item,index)=><Card item={item} key={index} setFavorList = {setFavorList} favorList={favorList} basket={basket} setBasket={setBasket}/>)}
    </div>
  )
}

export default Phone
