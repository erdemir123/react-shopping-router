import React, { useEffect, useState } from "react";
import Nav from "../conponet/Nav";
import Pars from "../asset/images/pars.png";
import Loading from "../asset/images/loading.gif";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import mainContex from "../Context/MainContex";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  toastSuccessNotify,
  toastErrorNotify,
  toastWarnNotify,
} from "../helper/Toastfy.jsx";
const Sepet = () => {
  const navigate = useNavigate();
  const { setBasket, basket } = useContext(mainContex);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  const total = basket.map((item) => item.price * item.amount);
  const sumtotal = total.reduce((acc, arr) => acc + arr, 0);
  const deleteBasket = (item) => {
    const newBasket = basket?.filter((product) => product.id !== item);
    // localStorage.setItem("basketList", JSON.stringify(newBasket));
    setBasket(newBasket);
  };
  const amountDesc = (item) => {
    const basketItem = basket?.find(
      (basketProduct) => basketProduct.id === item.id
    );
    basketItem.amount += 1;
    setBasket([
      basketItem,
      ...basket?.filter((product) => product.id !== item.id),
    ]);
    // toastSuccessNotify(`Sepetteki ${item.name} miktarı artırıldı`);
  };
  const amountInc = (item) => {
    const basketItem = basket?.find(
      (basketProduct) => basketProduct.id === item.id
    );

    basketItem.amount -= 1;
    setBasket([
      basketItem,
      ...basket?.filter((product) => product.id !== item.id),
    ]);
    // toastSuccessNotify(`Sepetteki ${item.name} miktarı azaltıldı`);
    if (basketItem.amount == 0) {
      setBasket([...basket?.filter((product) => product.id !== item.id)]);
      // toastErrorNotify("Ürün Sepetten Başarı İle Kaldırıldı");
    }
  };
  if (load) {
    return (
      <div className="flex flex-col w-full h-[100vh] bg-orange-400 justify-center items-center">
        <p className="text-6xl font-bold text-slate-800 font-serif text-center">
          PARS BİLİŞİM
        </p>
        <img src={Pars} alt="" className="w-96" />
        <img src={Loading} alt="" className="w-32" />
        <ToastContainer />
      </div>
    );
  } else if (basket.length == 0) {
    return (
      <div>
        <Nav />
        <div className="h-[97px]"></div>
        <p className="text-center font-bold text-orange-600 text-2xl  mt-10 ">
          {" "}
          Sepette ürün Bulunmamaktadır
        </p>
        <p className="text-center font-bold text-orange-600 text-2xl  mt-20 ">
          Eklemek için geri dön😊
        </p>
        <button
          className="bg-orange-400 mx-auto block  mt-8 py-1 px-2 text-xl text-slate-600 font-bold rounded-md active:scale-95"
          onClick={() => navigate("/home")}
        >
          Go Home
        </button>
        <div className="fixed w-full bottom-0 bg-slate-500 text-2xl font-bold text-slate-900 text-end py-5 pr-5 ">
          total : {sumtotal}
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-orange-200 h-full ">
        <Nav />
        <div className="h-[97px]"></div>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-5 py-20">
          {basket.map((item, index) => {
            return (
              <div
                className="flex  flex-col w-80 py-4 justify-center items-center bg-orange-400 relative rounded-lg shadow-sm shadow-slate-500"
                key={index}
              >
                <img src={item.url} alt="" className="w-48" />
                <div className="text-center text-slate-800 font-bold font-serif text-lg my-2 h-[100px] flex items-center">
                  {item.name}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-center text-slate-800 font-bold  text-lg my-2 flex bg-slate-500 rounded-md py-2 gap-2">
                    <button
                      className="bg-slate-500 py-2 px-4  text-lg text-white font-bold active:scale-95  md:rounded-md rounded-full flex justify-center w-15 h-10 items-center"
                      onClick={() => amountDesc(item)}
                    >
                      <svg width="1.8em" height="1.5em" viewBox="0 0 24 24"><path fill="orange" d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8l-8 8z"></path></svg>
                    </button>
                    <p className="mt-2 text-slate-300">Miktar : <span className="text-orange-300">{item.amount}</span></p>
                    <button
                      className="bg-slate-500 py-2 px-4  text-lg text-white font-bold active:scale-95  md:rounded-md rounded-full flex justify-center w-15 h-10 items-center"
                      onClick={() => amountInc(item)}
                    >
                      <svg width="1.8em" height="1.5em" viewBox="0 0 24 24">
                        <path
                          fill="orange"
                          d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8l8-8z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="text-center text-slate-800 font-bold  text-lg my-2">
                    Birim Fiyat :{item.price}
                  </div>
                  <div className="text-center text-slate-800 font-bold  text-lg my-2">
                    Total Fiyat :{item.price * item.amount}
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
            total : {sumtotal / 100} TL
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default Sepet;
