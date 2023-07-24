import React from "react";
import "./App.css";
import Auth from "./components/auth/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn, "isLoggedIn"); // Check if isLoggedIn is correctly retrieved
  const cartItem = useSelector((state)=>state.cart.itemsList)
  console.log(cartItem);
  return (
    <div className="App">
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;

