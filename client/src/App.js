import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

import Service from "./Components/Service/service";
import Pickup from "./Components/Pickup/Pickup";

import Register from "./Components/Register/Register";
import Navbar from "./Components/Home/Navbar";
import ContactUs from "./Components/Contact/ContactUs";
import Profile from "./Components/Profile/Profile";
import RequestViaNum from "./Components/RequestViaNum/RequestViaNum";
// import Profile from "./Components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reqViaNum" element={<RequestViaNum />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
