import React from 'react'
import data from '../data'
import Card from './Card'


const Accessory = ({func,favorList,basket,setBasket }) => {
const accessoryProduct = data.filter(item=>item.type ==="Accesssory")
  return (
    <div className='flex flex-wrap px-4 bg-orange-200'>
      {accessoryProduct.map((item,index)=><Card item={item} key={index} func = {func} favorList={favorList} basket={basket} setBasket={setBasket}/>)}
    </div>
  )
}

export default Accessory
