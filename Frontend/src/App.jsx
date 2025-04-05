import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Lazy } from "react";
const Home = Lazy(() => import("./pages/Home"));
const CheackOut = Lazy(() => import("./pages/CheackOut"));


function App() {

  return (
    <>
     
    </>
  )
}

export default App
