import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../conponet/Nav";
import { useNavigate } from "react-router-dom";
import Pars from "../asset/images/pars.png";
import Loading from "../asset/images/loading.gif";
import İndirim from "../asset/images/indirim.jpg";
// REACT_APP_apiKey=
// REACT_APP_authDomain=
// REACT_APP_projectId=
// REACT_APP_storageBucket=
// REACT_APP_messagingSenderId=
// REACT_APP_appId=
// REACT_APP_TMDB_KEY=

const Home = () => {
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);
  if (load) {
    return (
      <div className="flex flex-col w-full h-[100vh] bg-orange-400 justify-center items-center text-center">
        <p className="text-6xl font-bold text-slate-800 font-serif text-center">
          PARS BİLİŞİM
        </p>
        <img src={Pars} alt="" className="w-96" />
        <img src={Loading} alt="" className="w-32" />
      </div>
    );
  } else {
    return (
      <div>
        <Nav />
        <div className="h-[97px]"></div>
        <div className="flex flex-col mx-auto bg-slate-400  md:bg-slate-400  md:py-6 md:flex md:flex-row md:justify-center md:gap-16 md:items-center md:shadow-md md:shadow-slate-300 md:px-14 ">
          <button
            className="bg-slate-500 py-2 px-4  text-lg text-white font-bold active:scale-95 hover:bg-slate-600 md:rounded-md md:hover-bg-slate-600"
            onClick={() => navigate("")}
          >
            Tüm Ürünler
          </button>
          <button
            className="bg-slate-500 py-2 px-4  text-lg text-white font-bold active:scale-95  hover:bg-slate-600 md:rounded-md md:hover-bg-slate-600"
            onClick={() => navigate("electronic")}
          >
            Elektronik
          </button>
          <button
            className="bg-slate-500 py-2 px-4  text-lg text-white font-bold active:scale-95  hover:bg-slate-600 md:rounded-md md:hover-bg-slate-600"
            onClick={() => navigate("laptop")}
          >
            Laptop
          </button>
          <button
            className="bg-slate-500 py-2 px-4  text-lg text-white font-bold active:scale-95  hover:bg-slate-600 md:rounded-md md:hover-bg-slate-600"
            onClick={() => navigate("accessory")}
          >
            Aksesuar
          </button>
          <button
            className="bg-slate-500 py-2 px-4  text-lg text-white font-bold active:scale-95  hover:bg-slate-600  md:rounded-md md:hover-bg-slate-600"
            onClick={() => navigate("phone")}
          >
            Telefon
          </button>
        </div>
        <div className="bg-orange-200 flex justify-center">
          <img src={İndirim} alt="" className="w-[40%] h-[200px] mt-2" />
        </div>

        <Outlet />
      </div>
    );
  }
};

export default Home;
