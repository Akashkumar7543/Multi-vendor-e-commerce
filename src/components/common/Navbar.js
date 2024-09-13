import React from "react";
// import Menu from './Menu';
import SideNavbar from "./SideNavbar";

import "../core/Styles.css";

// import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../services/operations/authAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const { token } = useSelector((state) => state.auth);
  // const {user} = useSelector( (state) => state.profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="main-navbar shadow-sm sticky-top">
      <div className="top-navbar">
        <div className="container-fluid">
          <div className="row">
            <a
              href="/"
              className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block"
            >
              <div className="brand-flex">
                <h5 className="brand-name">Multi</h5>
                <h5 className="brand-name-color">Vendor</h5>
              </div>
            </a>
            <div className="col-md-1 my-auto">
              {/* <Menu /> */}
              <SideNavbar />
            </div>

            <div className="col-md-5 my-auto">
              {/* <form role="search">
                                <div className="input-group">
                                    <input type="search" placeholder="Search your product" className="form-control" />
                                    <button className="btn bg-white" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </form> */}

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">All Categories</a>
                                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/newarival">
                    New Arrivals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ourprodut">
                    Featured Products
                  </a>
                </li>
                <li className="nav-itemm">
                  <button
                    type="button"
                    class="r"
                  >
                    <span
                      class="glypfhicon
                    glyphicon-shopping-cart"
                    ></span>
                    <NavLink
                      to="/Cart"
                      className="navd-link text-decoration-none"
                    >
                      <div className="font-icon">
                        <div className="fsont-icon1">
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                        <div className="fondt-icon2">
                          <b> Cart </b>
                        </div>
                      </div>
                    </NavLink>
                           
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-md-4 my-auto">
              <ul className="nav justify-content-end gap-x-2">
                {token === null && (
                  <Link to="/login">
                    <button className="auth-btn">Log In</button>
                  </Link>
                )}
                {token === null && (
                  <Link to="/signup">
                    <button className="auth-btn-filled">Sign Up</button>
                  </Link>
                )}
                {token !== null && (
                  <Link to="/admin">
                    <button className="auth-btn">Dashboard</button>
                  </Link>
                )}
                {token !== null && (
                  <button
                    className="auth-btn-filled"
                    onClick={() => {
                      dispatch(logout(navigate));
                    }}
                  >
                    {/* <%= userdata.name %> */}
                    Log Out
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
