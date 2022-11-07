import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pars from "../asset/images/pars.png";
import { createUser } from "../auth/Firebase";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
  });
  const createUserRegister = (e) => {
    e.preventDefault();
    const displayName = register.name;
    const email = register.email;
    const password = register.password;
    createUser(email, password, navigate, displayName);
    
  };

  return (
    <>
      <section className="h-screen bg-orange-400">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 ">
              <p className="text-center font-bold text-4xl text-slate-600">
                PARS BİLİŞİM
              </p>
              <img src={Pars} className="w-full" alt="Pars"/>
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 ">
              {/* <form onSubmit={createUserRegister}> */}
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-orange-900 before:mt-0.5 after:flex-1 after:border-t after:border-orange-900 after:mt-0.5 ">
                  <p className="text-center mx-4 mb-0 text-slate-600 font-bold">
                    REGİSTER
                  </p>
                </div>
                {/* Name input */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    value={register.name}
                    onChange={(e) =>
                      setRegister({ ...register, name: e.target.value })
                    }
                    placeholder="UserName"
                  />
                </div>
                {/* Email input */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    value={register.email}
                    onChange={(e) =>
                      setRegister({ ...register, email: e.target.value })
                    }
                    placeholder="Email address"
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    value={register.password}
                      onChange={(e) =>
                        setRegister({ ...register, password: e.target.value })
                      }
                  />
                </div>
                <div className="flex justify-center items-center mb-6">
                  <div className="form-group form-check ">
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
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-auto"
                    onClick={createUserRegister}
                  >
                    Register
                  </button>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Register;
