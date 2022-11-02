import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AllProduct from "./conponet/AllProduct";
import Home from "./pages/Home";
import Sepet from "./pages/Sepet";
import Electronic from "./conponet/Electronic";
import Laptop from "./conponet/Laptop";
import Accessory from "./conponet/Accessory";
import Phone from "./conponet/Phone";
import Details from "./conponet/Details"
import Favorite from "./pages/Favorite";
import { useState } from "react";
import PrivateRouter from "./router/PrivateRouter";

function App() {
  const [favorList,setFavorList]=useState([])
  const [basket,setBasket]=useState([])
  
  return (
    <div >
      <Routes>
      <Route path="/home" element={<Home />} >
        <Route index element={<AllProduct func = {setFavorList} favorList={favorList} basket={basket} setBasket={setBasket}/>} />
        <Route path="electronic" element={<Electronic func = {setFavorList} favorList={favorList} basket={basket} setBasket={setBasket} />} />
        <Route path="Laptop" element={<Laptop func = {setFavorList} favorList={favorList} basket={basket} setBasket={setBasket}/>} />
        <Route path="accessory" element={<Accessory func = {setFavorList} favorList={favorList} basket={basket} setBasket={setBasket}/>} />
        <Route path="phone" element={<Phone func = {setFavorList} favorList={favorList} basket={basket} setBasket={setBasket}/>} />
        </Route>

        <Route path="sepet" element={<PrivateRouter />}>
        <Route path="" element={<Sepet basket={basket} setBasket={setBasket}/>} />
        </Route>
        <Route path="/details" element={<Details />} />
        <Route path="/favorite" element={<Favorite func = {setFavorList} favorList={favorList}/>} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
