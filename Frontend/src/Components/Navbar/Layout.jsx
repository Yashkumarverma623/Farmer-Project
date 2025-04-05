import {React, Lazy} from 'react'
import { Outlet, Link } from "react-router-dom";
const Navbar = Lazy(()=> import ('./Navbar'))
const Layout = () => {
  return (
    <>
    <Outlet/>
      <Navbar/>
    </>
  )
}

export default Layout
