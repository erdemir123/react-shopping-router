import React, { useState,useEffect } from "react";
import Nav from "../conponet/Nav";
import Pars from "../asset/images/pars.png";
import Loading from "../asset/images/loading.gif";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import mainContex from "../Context/MainContex";

const Favorite = () => {
  const  {setFavorList,favorList}=useContext(mainContex)
  console.log(favorList);
  const [load, setLoad] = useState(true);
  // const favoriteList = JSON.parse(localStorage.getItem("favoriteList")) || [];
  const navigate = useNavigate();
  const deleteFavor = (id) => {
    const newFavor =favorList?.filter((product) => product.id !== id);
    localStorage.setItem("favoriteList", JSON.stringify(newFavor));
    setFavorList(newFavor);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  if(load){
    return (
      <div className='flex flex-col w-full h-[100vh] bg-orange-400 justify-center items-center'>
        <p className="text-6xl font-bold text-slate-800 font-serif">PARS BİLİŞİM</p>
        <img src={Pars} alt="" className="w-96" />
        <img src={Loading} alt="" className="w-32" />
      </div>
    
    )
  }else if (favorList?.length == 0) {
    return (
      <div>
        <Nav />
        <p className="text-center font-bold text-orange-600 text-2xl  mt-20 "> Favori Listesine Eklenen ürün Bulunmamaktadır</p>
        <p className="text-center font-bold text-orange-600 text-2xl  mt-20 ">Eklemek için geri dön😊</p>
        <button className='bg-orange-400 mx-auto block  mt-8 py-1 px-2 text-xl text-slate-600 font-bold rounded-md active:scale-95' onClick={()=>navigate("/home")}>Go Home</button>
      </div>
    );
  }
  else{
    return (
        <div>
          <Nav />
          <div className="flex flex-wrap mb-4 justify-center items-center gap-5">
            {favorList.map((item, index) => (
              <div className="bg-orange-400 flex flex-col justify-center items-center w-[350px] h-[400px] border-2 border-slate-400 mt-10 relative shadow-md shadow-slate-400 rounded-md mx-auto">
              <img src={item.url} alt="" />
              <div className="font-bold text-2xl text-slate-900 my-2">{item.price} TL</div>
              <div className="font-bold text-md text-slate-900 my-2 text-center">
                {item.name}
              </div>
              <AiFillCloseCircle
                className="absolute top-2 right-2 text-lg text-slate-300 z-50"
                onClick={() => deleteFavor(item.id)}
              />
            </div>
            ))}
          </div>
          <button
            className="bg-orange-400 mx-auto block  my-8 py-1 px-2 text-xl text-slate-600 font-bold rounded-md active:scale-95 "
            onClick={() => navigate("/home")}
          >
            Go Home
          </button>
        </div>
      );
  }
};

export default Favorite;
