import React from 'react'
import data from "../data"
import Card from './Card'

const LAptop = ({func,favorList,basket,setBasket }) => {
  const laptopProduct = data.filter(item=>item.type === "Computer")
  return (
    <div className='flex flex-wrap px-8 bg-orange-200'>
      {laptopProduct.map((item,index)=> <Card item={item} key={index} func = {func} favorList={favorList} basket={basket} setBasket={setBasket}/>)}
    </div>
  )
}

export default LAptop
