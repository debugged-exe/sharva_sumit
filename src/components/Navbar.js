import React from "react";
import sharva_logo from "./sharva_logo.png";
import './CSS/navbar.css'
const Navbar = () => {
  return (
    <div className="d-flex row w-100 above_navbar_div">
    <div className="line "></div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <img src={sharva_logo} className='mx-3' width = '50px' alt="" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-5 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white" href="#">
                  ABOUT US
                </a>
              </li>

              <li class="nav-item dropdown">
          <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OUR INITIATIVES
          </a>
          <ul class="  dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
              <li class="nav-item ">
                <a class="nav-link  text-white" href="#">
                  CONTACT US
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white" href="#">
                  BECOME A VOLENTEER
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white" href="#">
                  DONATE NOW
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
