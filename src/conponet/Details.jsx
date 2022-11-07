import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import Nav from './Nav';


const Details = () => {
const {state}= useLocation()
const navigate =useNavigate()
  return (
    <div >
        <Nav />
        <div className="h-[97px]"></div>
    <div className='bg-orange-400 flex flex-col justify-center items-center w-[350px] h-[450px] border-2 border-slate-400 mt-10 relative shadow-md shadow-slate-400 rounded-md mx-auto'>
    <img src={state.url} alt=""  />
      <div className='font-bold text-2xl text-slate-900 my-2'>{state.price} TL</div>
      <div className='font-bold text-md text-slate-900 my-2 text-center'>{state.name}</div>
      <p className='text-center text-slate-500 py-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto pariatur excepturi sunt iste inventore earum eligendi blanditiis cumque doloribus ipsam!</p>
    </div>

    <button className='bg-orange-400 mx-auto block  mt-8 py-1 px-2 text-xl text-slate-600 font-bold rounded-md active:scale-95' onClick={()=>navigate("/home")}>Go Home</button>
    </div>
  )
}

export default Details
