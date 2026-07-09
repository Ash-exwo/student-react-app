import React from "react";

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


            <a
              className="nav-link fw-semibold mx-2"
              href="/"
              style={{ color: "#FFFFFF" }}
            >
              Home
            </a>


            <a
              className="nav-link fw-semibold mx-2"
              href="/addstudent"
              style={{ color: "#FFFFFF" }}
            >
              Add Student
            </a>


            <a
              className="nav-link fw-semibold mx-2"
              href="/students"
              style={{ color: "#FFFFFF" }}
            >
              Search Student
            </a>


            <a
              className="nav-link fw-semibold mx-2"
              href="/attendance"
              style={{ color: "#FFFFFF" }}
            >
              Delete Student
            </a>


            <a
              className="nav-link fw-semibold mx-2"
              href="/records"
              style={{ color: "#FFFFFF" }}
            >
              Students Record
            </a>


          </div>

        </div>


      </div>

    </nav>
  );
};

export default NavBar;