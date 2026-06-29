import React from "react";

function Header() {
  return (
    <header className="p-3 text-bg-light">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-primery">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-dark">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-dark">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-dark">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-dark">
                About
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search">
            <input
              type="search"
              className="form-control form-control-dark text-bg-light"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-light me-2 text-dark">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
