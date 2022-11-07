import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../conponet/Nav";
import { useNavigate } from "react-router-dom";
import Pars from "../asset/images/pars.png";
import Loading from "../asset/images/loading.gif";
import İndirim from "../asset/images/indirim.jpg";

const Home = () => {
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    },2000);
  }, []);
  if (load) {
    return (
      <div className="flex flex-col w-full h-[100vh] bg-orange-400 justify-center items-center">
        <p className="text-6xl font-bold text-slate-800 font-serif">PARS BİLİŞİM</p>
        <img src={Pars} alt="" className="w-96" />
        <img src={Loading} alt="" className="w-32" />
      </div>
    );
  } else {
    return (
      <div>
        <Nav />
        <div className="bg-slate-400  py-4 flex justify-between items-center shadow-md shadow-slate-300 md:px-14">
          <button
            className="bg-slate-500 py-1 px-4 rounded-lg text-lg text-white font-bold active:scale-95"
            onClick={() => navigate("")}
          >
            Tüm Ürünler
          </button>
          <button
            className="bg-slate-500 py-1 px-4 rounded-lg text-lg text-white font-bold active:scale-95"
            onClick={() => navigate("electronic")}
          >
            Elektronik
          </button>
          <button
            className="bg-slate-500 py-1 px-4 rounded-lg text-lg text-white font-bold active:scale-95"
            onClick={() => navigate("laptop")}
          >
            Laptop
          </button>
          <button
            className="bg-slate-500 py-1 px-4 rounded-lg text-lg text-white font-bold active:scale-95"
            onClick={() => navigate("accessory")}
          >
            Aksesuar
          </button>
          <button
            className="bg-slate-500 py-1 px-4 rounded-lg text-lg text-white font-bold active:scale-95"
            onClick={() => navigate("phone")}
          >
            Telefon
          </button>
        </div>
        <div className="bg-orange-200 flex justify-center">
        <img src={İndirim} alt="" className="w-[40%] h-[200px] mt-2"/>
        </div>
        
        <Outlet />
        
      </div>
    );
  }
};

export default Home;
