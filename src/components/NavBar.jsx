import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm sticky-top"
      style={{ backgroundColor: "#1E3A8A" }}
    >

      <div className="container">

      <a 
  className="navbar-brand d-flex align-items-center" 
  href="/"
>
    <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
      alt="Student Portal Logo"
      width="45"
      height="45"
      className="me-2"
    />

    <span
      className="fw-bold fs-3"
      style={{
        color: "#FFFFFF",
      }}
    >
      Student Hub
    </span>
</a>



        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            borderColor: "#DBEAFE"
          }}
        >

          <span 
            className="navbar-toggler-icon"
          ></span>

        </button>



        <div 
          className="collapse navbar-collapse" 
          id="navbarNavAltMarkup"
        >

          <div className="navbar-nav ms-auto">


            <Link
              className="nav-link fw-semibold mx-2"
              to="/"
              style={{ color: "#FFFFFF" }}
            >
              Add Student
            </Link>


            <Link
              className="nav-link fw-semibold mx-2"
              to="/search"
              style={{ color: "#FFFFFF" }}
            >
              Search Student
            </Link>


            <Link
              className="nav-link fw-semibold mx-2"
              to="/delete"
              style={{ color: "#FFFFFF" }}
            >
              Delete Student
            </Link>


            <Link
              className="nav-link fw-semibold mx-2"
              to="/records"
              style={{ color: "#FFFFFF" }}
            >
              Students Record
            </Link>


          </div>

        </div>


      </div>

    </nav>
  );
};

export default NavBar;