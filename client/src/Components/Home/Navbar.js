import React from 'react'
import css from '../Home/Navbar.module.css';
import { NavLink,Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className={` navbar bg-light ${css.nav}`} >

  <div className="container-fluid">
  <div className={css.circle} style={{width:"400px",backgroundColor:"#D4FDC5",height:"400px",borderRadius:"50%",top:"-300%",left:"35%"}}/>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Navbar w/ text</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/service">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pickup">Pick up</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <form className="d-flex" style={{zIndex:"999"}} role="search">
      <input id={css.SearchBox} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}

export default Navbar