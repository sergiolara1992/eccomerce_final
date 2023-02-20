import React from "react"
import {Routes, Route} from "react-router-dom"
import Layout from "../components/Layout"
import Carousel from "../container/Carousel"
import Account from "../pages/Account"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Orders from "../pages/Orders"
import Profile from "../pages/Profile"
import Search from "../pages/Search"
import Search2 from "../pages/Search2"
import Orders2 from "../pages/Order2"


const App = () => {
 

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<Layout />}>
          <Route path="/app/home" element={<Home />} />
          <Route path="/app/search" element={<Search />} />
          <Route path="/app/search/search2" element={<Search2 />} />

          <Route path="/app/orders" element={<Orders />} />
          <Route path="/app/orders/orders2" element={<Orders2 />} />

          <Route path="/app/profile" element={<Profile />} />
          <Route path="/app/profile/account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
