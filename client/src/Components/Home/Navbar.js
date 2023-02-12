import React from "react";
import css from "../Home/Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav d-flex justify-content-center p-4">
      <h5 className="ms-5"><Link className="text-decoration-none text-dark" to='/' >Home</Link></h5>
      <h5 className="ms-5"><Link className="text-decoration-none text-dark" to='/pickup' >Pick Up</Link></h5>
      <h5 className="ms-5">Services</h5>
      <h5 className="ms-5">Store</h5>
      <h5 className="ms-5"><Link className="text-decoration-none text-dark" to='/contact' >Contact Us</Link></h5>
    </div>
  );
};

export default Navbar;
