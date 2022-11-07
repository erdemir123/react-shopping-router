import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pars from "../asset/images/pars.png";
import { FaShoppingCart } from "react-icons/fa";
import { RiHeartAddLine } from "react-icons/ri";
import MainContex from "../Context/MainContex";
import { logOut } from "../auth/Firebase";
import Unknown from "../asset/images/unknown.jpg";

const Nav = () => {
  const navigate = useNavigate();
  const { basket, favorList, currentUser } = useContext(MainContex);
  let sumTotal = 0;
  basket?.map((item) => (sumTotal += item.amount));
  return (
    <div className="bg-orange-300  fixed top-0 w-full z-50 md:bg-orange-300 md:flex md:justify-between md:px-10 md:items-center md:py-4 md:font-bold md:text-slate-800 md:fixed md:top-0 md:w-full md:z-50 md:shadow-sm md:shadow-orange-500">
      <div className="text-lg flex items-center gap-1 justify-center">
        <img
          src={Pars}
          alt=""
          className="w-24"
          onClick={() => navigate("/home")}
        />
        <p className="mt-4 text-slate-600 font-bold ">PARS BİLİŞİM</p>
      </div>

      <div className="flex justify-around items-center md:flex md:gap-4 md:items-center">
        <img
          src={currentUser?.photoURL && Unknown}
          alt=""
          className="w-8 rounded-full"
        />
        <h5 className="bg-slate-400 py-1 px-2 rounded-md text-white active:scale-95">
          {currentUser?.displayName ? currentUser?.displayName : "user"}
        </h5>
        <button
          onClick={logOut}
          className="bg-slate-400 py-1 px-2 rounded-md text-white active:scale-95"
        >
          LogOut
        </button>
        <FaShoppingCart
          className="text-3xl text-red-800"
          onClick={() => navigate("/sepet")}
          
        >
          <p className="w-6 h-6 bg-slate-400 rounded-full absolute text-xs right-10 bottom-3.5 flex justify-center items-center text-white">
            {sumTotal ? sumTotal : "0"}
          </p>
        </FaShoppingCart>

        <RiHeartAddLine
          className="text-3xl text-red-600"
          onClick={() => navigate("/favorite")}
          
        >
          <p className="w-6 h-6 bg-slate-400 rounded-full absolute text-xs -right-4 bottom-3.5 flex justify-center items-center text-white">
            {favorList.length ? favorList.length : "0"}sda
          </p>
        </RiHeartAddLine>
      </div>
    </div>
  );
};

export default Nav;
