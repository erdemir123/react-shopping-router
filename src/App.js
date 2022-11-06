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
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [favorList, setFavorList] = useState([]);
  const [basket, setBasket] = useState([]);

  return (
    <div>
      <MainContex.Provider
        value={{ favorList, setFavorList, basket, setBasket }}
      >
        <Router>
          <Routes>
            <Route path="/home" element={<Home />}>
              <Route index element={<AllProduct />} />
              <Route path="electronic" element={<Electronic />} />
              <Route path="Laptop" element={<Laptop />} />
              <Route path="accessory" element={<Accessory />} />
              <Route path="phone" element={<Phone />} />
            </Route>

            <Route path="sepet" element={<PrivateRouter />}>
              <Route path="" element={<Sepet />} />
            </Route>
            <Route path="/details" element={<Details />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<Navigate to="" />} />
          </Routes>
        </Router>
      </MainContex.Provider>
    </div>
  );
}

export default App;
