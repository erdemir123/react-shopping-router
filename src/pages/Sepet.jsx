import React, { useEffect, useState } from "react";
import Nav from "../conponet/Nav";
import Pars from "../asset/images/pars.png";
import Loading from "../asset/images/loading.gif";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Sepet = ({ basket, setBasket }) => {
  const navigate = useNavigate;
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  const total = basket.map((item) => item.price * item.amount);
  const sumtotal = total.reduce((acc, arr) => acc + arr, 0);
  const deleteBasket = (item) => {
    const newBasket = basket.filter((product) => product.id !== item);
    localStorage.setItem("basketList", JSON.stringify(newBasket));
    setBasket(newBasket);
  };
  if (load) {
    return (
      <div className="flex flex-col w-full h-[100vh] bg-orange-400 justify-center items-center">
        <p className="text-6xl font-bold text-slate-800 font-serif">
          PARS BİLİŞİM
        </p>
        <img src={Pars} alt="" className="w-96" />
        <img src={Loading} alt="" className="w-32" />
      </div>
    );
  } else if (basket.length == 0) {
    return (
      <div>
        <Nav />
        <p className="text-center font-bold text-orange-600 text-2xl  mt-10 ">
          {" "}
          Sepette ürün Bulunmamaktadır
        </p>
        <p className="text-center font-bold text-orange-600 text-2xl  mt-20 ">
          Eklemek için geri dön😊
        </p>        
        <div className="fixed w-full bottom-0 bg-slate-500 text-2xl font-bold text-slate-900 text-end py-5 pr-5 ">
          total : {sumtotal}
        </div>
        
      </div>
    );
  } else {
    return (
      <div className="bg-orange-200 h-full ">
        <Nav />
        <div className="flex flex-wrap justify-center items-center gap-5 mt-5 py-20">
          {basket.map((item) => {
            return (
              <div className="flex  flex-col w-80 h-96 justify-center items-center bg-orange-400 relative rounded-lg shadow-sm shadow-slate-500">
                <img src={item.url} alt="" className="w-48" />
                <div className="text-center text-slate-800 font-bold font-serif text-lg my-2 ">
                  {item.name}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-center text-slate-800 font-bold  text-lg my-2">
                    Miktar :{item.amount}
                  </div>
                  <div className="text-center text-slate-800 font-bold  text-lg my-2">
                    Fiyat :{item.price}
                  </div>
                  <AiFillCloseCircle
                    className="absolute top-2 right-2 text-lg text-slate-300"
                    onClick={() => deleteBasket(item.id)}
                  />
                </div>
                
              </div>
              
            );
          })}
          <div className="fixed w-full bottom-0 bg-slate-500 text-2xl font-bold text-slate-900 text-end py-5 pr-5 ">
            total : {sumtotal}
          </div>
        </div>
        
      </div>
    );
  }
};

export default Sepet;
