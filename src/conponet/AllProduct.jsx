import React, { useState } from 'react'
import Card from "./Card"
import data from "../data"

const AllProduct = ({func,favorList,basket,setBasket}) => {
    // const [input,setİnput]=useState()
    // const [searchData,setSearchData]=useState([])
    // const [searchActive,setSearchActive]=useState(false)
    // const handleSearch =()=>{
    //    const search = data.filter((item)=>item.name === input)
    //    setSearchActive(true)
    //    setSearchData([...searchData,search])
    // }

  return (
    <div>
        {/* <div className='bg-orange-400 py-2 flex justify-center gap-2'>
            <input type="text" className='w-72 py-1 rounded-md indent-2 uppercase border-none font-bold text-orange-500' placeholder='Ürün ara' value={input} onChange={(e)=>setİnput(e.target.value)}/>
            <button className='bg-slate-400 px-4 uppercase rounded-md text-slate-800 font-bold shadow-md shadow-slate-200 active:scale-95' onClick={handleSearch}>ara</button>
        </div> */}
        <div className='flex flex-wrap px-4 bg-orange-200'>
        {data.map((item,index)=> <Card  item={item} key={index} func = {func} favorList={favorList} basket={basket} setBasket={setBasket}/>)}
    </div>
    </div>
    
  )
}

export default AllProduct