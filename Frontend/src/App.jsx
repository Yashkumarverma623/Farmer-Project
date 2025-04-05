import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("./pages/Home.jsx"));
const Checkout = lazy(() => import("./pages/Checkout.jsx"));
const Navbar = lazy(() => import("./components/Navbar/Navbar.jsx"));


function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
