import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pars from "../asset/images/pars.png";
import { signIn, signUpProvider } from "../auth/Firebase";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import MainContex from "../Context/MainContex";
import { useEffect } from "react";

const Login = () => {
  const [login, setLogin] = useState({email:"",password:""});
  const {currentUser}=useContext(MainContex)
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log(login);
    signIn(login.email, login.password, navigate)
  };
  const handleGoogle=()=>{
    signUpProvider(navigate)
  }
  useEffect(()=>{
    setTimeout(()=>{
      if(currentUser){
        navigate("/home")
        console.log("sadık");
      }
    },5)
  },[currentUser])
  return (
    <>
      <section className="h-screen bg-orange-400">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <p className="text-center font-bold text-4xl text-slate-600">
                PARS BİLİŞİM
              </p>
              <img src={Pars} className="w-full" alt="pars" />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="flex flex-row items-center justify-center ">
                  <p className="text-lg mb-0 mr-4 ">Sign in with</p>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    onClick={handleGoogle}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="m12.9 13.5l-.7-.5c-.2-.2-.5-.4-.5-.8s.3-.7.6-1c.8-.6 1.7-1.3 1.7-2.8c0-1.5-.9-2.3-1.4-2.7h1.2L15 5h-4.1c-1 0-2.4.2-3.5 1.1c-.8.7-1.2 1.7-1.2 2.6c0 1.5 1.2 3.1 3.3 3.1h.6c-.1.2-.2.4-.2.7c0 .6.3 1 .6 1.3c-.9.1-2.5.2-3.8.9c-1.2.7-1.5 1.7-1.5 2.4c0 1.5 1.4 2.8 4.2 2.8c3.4 0 5.2-1.9 5.2-3.7c0-1.3-.8-1.9-1.7-2.7zm-2.5-2.2c-1.7 0-2.5-2.2-2.5-3.5c0-.5.1-1 .4-1.5c.3-.4.9-.7 1.4-.7c1.6 0 2.5 2.2 2.5 3.6c0 .4 0 1-.5 1.4c-.3.4-.9.7-1.3.7zm0 7.9c-2.1 0-3.5-1-3.5-2.4s1.3-1.9 1.7-2c.8-.3 1.9-.3 2.1-.3h.5c1.5 1.1 2.1 1.6 2.1 2.6c0 1.2-1 2.1-2.9 2.1zM17 12h-2v-1h2V9.1l1-.1v2h2v1h-2v2h-1z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-orange-900 before:mt-0.5 after:flex-1 after:border-t after:border-orange-900 after:mt-0.5 ">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>
                {/* Email input */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    // id="exampleFormControlInput2"
                    placeholder="Email address"
                    value={login?.email}
                    onChange={(e) => setLogin({...login, email:e.target.value})}
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    // id="exampleFormControlInput2"
                    placeholder="Password"
                    value={login?.password}
                    onChange={(e) => setLogin({...login, password:e.target.value})}
                  />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <span  className="text-gray-800">
                    Forgot password?
                  </span>
                </div>
                <div className="text-center ">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-slate-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <p className="text-md font-semibold mt-2 pt-1 mb-0  ">
                    Don't have an account?
                    <span
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out text-md ml-2 underline"
                      onClick={() => navigate("/register")}
                    >
                      Register
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;
