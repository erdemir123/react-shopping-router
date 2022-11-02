import React from 'react'
import data from "../data"
import Card from './Card'
const Electronic = ({func,favorList,basket,setBasket }) => {
  const electronicProduct= data.filter((item)=>item.type === "Electronic")
  console.log(electronicProduct)
  return (
    <div className='flex flex-wrap px-4 bg-orange-200'>
      {electronicProduct.map((item,index)=> <Card item={item} key={index} func = {func} favorList={favorList} basket={basket} setBasket={setBasket}/>)}
    </div>
  )
}

export default Electronic
