import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand h1 ">
          <Link to="/" className="nav-link">
            <BiDonateBlood /> Blood Bank App
          </Link>

        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            {location.pathname === "/" ||
              location.pathname === "/donar" ||
              location.pathname === "/hospital" ? (

              <li className="nav-item">
                <Link to="/analytics" className="nav-link">
                  Analytics
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item mx-3">
              <div className="nav-link">
                <BiUserCircle /> Welcome{" "}
                {user?.name || user?.hospitalName || user?.organisationName}
                &nbsp;
                <span className="badge text-bg-light">{user?.role}</span>
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-light btn-sm"
              type="submit"
              onClick={handleLogout}>
              Logout</button>
          </form>
        </div>
      </div>
    </nav>

  );
};

export default Header;