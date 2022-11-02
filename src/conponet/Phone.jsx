import React from 'react'
import data from '../data'
import Card from './Card'

const Phone = ({func,favorList,basket,setBasket }) => {
  const phoneProduct = data.filter(item=>item.type ==="Phone")
  return (
    <div className='flex flex-wrap px-4 bg-orange-200'>
      {phoneProduct.map((item,index)=><Card item={item} key={index} func = {func} favorList={favorList} basket={basket} setBasket={setBasket}/>)}
    </div>
  )
}

export default Phone
