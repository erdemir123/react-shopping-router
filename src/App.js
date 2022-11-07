import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AllProduct from "./conponet/AllProduct";
import Home from "./pages/Home";
import Sepet from "./pages/Sepet";
import Electronic from "./conponet/Electronic";
import Laptop from "./conponet/Laptop";
import Accessory from "./conponet/Accessory";
import Phone from "./conponet/Phone";
import Details from "./conponet/Details";
import Favorite from "./pages/Favorite";
import { useState } from "react";
import PrivateRouter from "./router/PrivateRouter";
import MainContex from "./Context/MainContex";

import Login from "./pages/Login";
import Register from "./pages/Register";
import { userObserver } from "./auth/Firebase";
import { useEffect } from "react";

function App() {
  const [favorList, setFavorList] = useState([]);
  const [basket, setBasket] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <div>
      <MainContex.Provider
        value={{ favorList, setFavorList, basket, setBasket, currentUser }}
      >
        <Routes>
        
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="" element={<PrivateRouter/>}>
          <Route path="/home" element={<Home />}>
            <Route index element={<AllProduct />} />
            <Route path="electronic" element={<Electronic />} />
            <Route path="Laptop" element={<Laptop />} />
            <Route path="accessory" element={<Accessory />} />
            <Route path="phone" element={<Phone />} />
          </Route>
          <Route path="sepet" element={<Sepet />} />
          <Route path="/details" element={<Details />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Navigate to="" />} />
          </Route>
        </Routes>
      </MainContex.Provider>
    </div>
  );
}

export default App;
