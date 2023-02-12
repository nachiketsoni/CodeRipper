import React from "react";
import css from "../Home/Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav d-flex justify-content-center p-4">
      <h5 className="ms-5">Home</h5>
      <h5 className="ms-5">Pick Up</h5>
      <h5 className="ms-5">Services</h5>
      <h5 className="ms-5">Store</h5>
    </div>
  );
};

export default Navbar;
