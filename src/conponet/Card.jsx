import React from "react";
import { FaTruck } from "react-icons/fa";
import { RiHeartAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  toastSuccessNotify,
  toastErrorNotify,
  toastWarnNotify,
} from "../helper/Toastfy.jsx";

const Card = ({ item, favorList, setFavorList, setBasket, basket }) => {
  const navigate = useNavigate();
  const total = basket.filter((product) => product.id == item.id);
  console.log();

  const favorite = (item) => {
    setFavorList([
      ...favorList.filter((product) => product.id !== item.id),
      item,
    ]);
    // localStorage.setItem("favoriteList", JSON.stringify(favorList));
    // toastSuccessNotify(`Favorilere ${item.name} eklendi`)
  };

  const addBasket = (item) => {
    const amountItem = basket?.find(
      (basketProduct) => basketProduct.id === item.id
    );
    if (amountItem) {
      amountItem.amount += 1;
      setBasket([
        ...basket?.filter((product) => product.id !== item.id),
        amountItem,
      ]);
      // localStorage.setItem("basketList", JSON.stringify(basket));
      
    } else {
      setBasket([
        ...basket,
        {
          id: item.id,
          url: item.url,
          name: item.name,
          price: item.price,
          amount: 1,
        },
      ]);
      // localStorage.setItem("basketList", JSON.stringify(basket))
      toastSuccessNotify("Ürün Listeye Eklendi 🧺");
    }
  };

  return (
    <div className="bg-orange-400 flex flex-col justify-center items-center w-[300px] h-[400px] border-2 border-orange-800 mx-auto my-4 relative shadow-md shadow-orange-900 rounded-md">
      <span className="absolute top-2 left-2 text-slate-500 font-bold text-md flex items-center gap-2">
        Kargo Bedava <FaTruck />
      </span>
      <RiHeartAddLine
        className="absolute top-[9px] right-4 text-xl text-red-900"
        onClick={() => favorite(item)}
      />
      <img src={item.url} alt="" className="w-48" />
      <p className="my-2 text-2xl font-bold text-slate-600">{item.price} TL</p>
      <p className="text-center my-2 text-md font-bold text-slate-600">
        {item.name}
      </p>
      <div className="absolute bottom-5 flex gap-6">
        <button
          className="py-1 px-2 bg-slate-400 rounded-lg shadow-sm shadow-slate-200  text-slate-800  font-bold text-md active:scale-95"
          onClick={() => navigate("/details", { state: item })}
        >
          İncele
        </button>
        <span className="py-1 px-6 bg-slate-400 rounded-lg shadow-sm shadow-slate-200  text-slate-800  font-bold text-md active:scale-95">
          {total[0]?.amount ? total[0]?.amount : "0"}
        </span>
        <button
          className="py-1 px-2 bg-slate-400 rounded-lg shadow-sm shadow-slate-200 text-slate-800  font-bold text-md active:scale-95"
          onClick={() => addBasket(item)}
        >
          Sepete ekle
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
