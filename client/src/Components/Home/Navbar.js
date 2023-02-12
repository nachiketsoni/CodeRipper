import React from "react";
import css from "../Home/Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const d = useSelector((e) => e.user);
  console.log(d);
  return (
    <div className="nav d-flex justify-content-center align-items-center p-4">
      <h5 className="ms-5">
        <Link className="text-decoration-none text-dark" to="/">
          Home
        </Link>
      </h5>
      <h5 className="ms-5">
        <Link className="text-decoration-none text-dark" to="/pickup">
          Pick Up
        </Link>
      </h5>
      <h5 className="ms-5">
        <a className="text-decoration-none text-dark" href="#serv">
          Services
        </a>
      </h5>

      <h5 className="ms-5">Store</h5>
      {d.user && d.user ? (
        <h5 className="ms-5">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              height: "3vmax",
              width: "3vmax",
              borderRadius: "50%",
              backgroundColor: "#F9F6EE",
            }}
          >
            {d.user.name[0]}
          </div>
        </h5>
      ) : (
        <h5 className="ms-5">
          <Link className="text-decoration-none text-dark" to="/register">
            Login
          </Link>
        </h5>
      )}
    </div>
  );
};

export default Navbar;
