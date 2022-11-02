import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../asset/images/logo.png";
import Pars from "../asset/images/pars.png";
import Valid from "../asset/images/valid.png";
import { FaShoppingCart } from "react-icons/fa";
import { RiHeartAddLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";

const Nav = () => {
  const navigate = useNavigate();
  const [pbasket, setPbasket] = useState(false);
  const [pfavor, setPfavor] = useState(false);
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState(false);
  // const basket = JSON.parse(localStorage.getItem("basketList"));
  const aboutClick = () => {
    if (!login) {
      user.push(email);
      localStorage.setItem("data", JSON.stringify(user));
      alert("kayıt yapıldı");
      setLogin(true);
    }
    if (login) {
      navigate("/sepet", { state: email });
    }
  };
  return (
    <div className="bg-orange-300 flex justify-between px-10 items-center py-4 font-bold text-slate-800 ">
      <img
        src={Logo}
        alt=""
        className="w-[100px]  h-[60px]"
        onClick={() => navigate("home")}
      />
      <div className="text-lg flex items-center gap-1">
        <p className="mt-4 text-slate-600">PARS BİLİŞİM</p>
        <img src={Pars} alt="" className="w-24" />
      </div>
      <div className="absolute top-1 right-2  ">
        <p
          className={
            pbasket
              ? "block  bg-white rounded-md py-.5 text-red-800 px-2"
              : "hidden"
          }
        >
          SEPETE GİT
        </p>
        <p
          className={
            pfavor
              ? "block  bg-white rounded-md py-.5 text-red-800 px-2"
              : "hidden"
          }
        >
          FAVORİLERE GİT
        </p>
      </div>

      <div className="flex items-center gap-5 relative">
        {/* <p className="w-6 h-6 bg-slate-400 rounded-full absolute text-xs left-4 bottom-3 flex justify-center items-center text-white">
        {basket?.length == null && <p>boş</p>}
          {(basket?.length == 0) && <p>0</p>}
          {(basket?.length > 0) && <p>{basket?.length }</p>}
        </p> */}
        <FaShoppingCart
          className="text-3xl text-red-800"
          onClick={() => setModal(!modal)}
          onMouseOver={() => setPbasket(true)}
          onMouseLeave={() => setPbasket(false)}
        />
        <RiHeartAddLine
          className="text-3xl text-red-600"
          onClick={() => navigate("/favorite")}
          onMouseOver={() => setPfavor(true)}
          onMouseLeave={() => setPfavor(false)}
        />
      </div>
      <div
        className={
          modal
            ? "absolute left-[50%] top-40 gap-2  duration-[1500ms] w-50 py-14 px-14 translate-x-[-50%] flex flex-col bg-orange-200 z-50 rounded-lg shadow-lg shadow-slate-300 "
            : "absolute left-[50%] -top-80 translate-x-[-50%]"
        }
      >
        <AiFillCloseCircle
          className="absolute top-2 right-2"
          onClick={() => setModal(!modal)}
        />
        <p>SEPETE GİTMEK İÇİN GİRİŞ YAPINIZ</p>
        <input
          type="text"
          className="rounded-md indent-2 py-4"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email giriniz ..."
        />
        <div className="flex justify-center gap-2 py-5 px-10">
          <button
            className="bg-slate-500 rounded-lg px-2 py-1 text-lg text-white font-bold active:scale-95 "
            onClick={() => setLogin(!login)}
          >
            {login ? "üye kaydı" : "üye girişi"}
          </button>
          <button
            className="bg-slate-500 rounded-lg px-2 py-1 text-lg text-white font-bold active:scale-95"
            onClick={() => aboutClick()}
          >
            {login ? "Login" : "Register"}
          </button>
        </div>
        <img src={Valid} alt="" className="w-24 mx-auto " />
        <span className={login ?"opacity-0 duration-700" : "w-[6px] h-12 rounded-tr-xl rounded-bl-xl bg-red-600 absolute bottom-14 right-[160px] -rotate-[45deg] duration-700"  }></span>
      </div>
    </div>
  );
};

export default Nav;
