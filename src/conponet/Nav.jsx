import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../asset/images/logo.png";
import Pars from "../asset/images/pars.png";
import { FaShoppingCart } from "react-icons/fa";
import { RiHeartAddLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import MainContex from "../Context/MainContex";

const Nav = () => {
  const navigate = useNavigate();
  const {basket,favorList} =useContext(MainContex)
  const [pbasket, setPbasket] = useState(false);
  const [pfavor, setPfavor] = useState(false);
  const [modal, setModal] = useState(false);
  let sumTotal = 0
  basket?.map((item)=>sumTotal+=item.amount)
  console.log(basket.length)
  return (
    <div className="bg-orange-300 flex justify-between px-10 items-center py-4 font-bold text-slate-800 ">
      <img
        src={Logo}
        alt=""
        className="w-[100px]  h-[60px]"
        onClick={() => navigate("/home")}
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
        <p className="w-6 h-6 bg-slate-400 rounded-full absolute text-xs left-4 bottom-3 flex justify-center items-center text-white">
        {sumTotal ? sumTotal : "0"}
        </p>
        <p className="w-6 h-6 bg-slate-400 rounded-full absolute text-xs -right-4 bottom-2.5 flex justify-center items-center text-white">
        {favorList.length ? favorList.length : "0"}
        </p>
        <FaShoppingCart
          className="text-3xl text-red-800"
          onClick={() => navigate("/sepet")}
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
      </div>
    </div>
  );
};

export default Nav;
