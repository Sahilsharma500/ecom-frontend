// src/components/Header.jsx
import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Context } from "../../utils/context";
import Cart from "../cart/Cart";
import Search from "./Search/Search";
import { Modal } from "bootstrap"; // Import Bootstrap Modal

function Header() {
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { cartCount } = useContext(Context);

  const handleScroll = () => {
    const offsets = window.scrollY;
    setScrolled(offsets > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Initialize modal
    const modalElement = document.getElementById('exampleModal');
    const modalInstance = new Modal(modalElement);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      modalInstance.dispose();
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg nav_sec1 ${scrolled ? "sticky_nav1" : ""}`}>
        <div className="container gx-0">
          <NavLink to="/">
            <img src={logo} alt="logo" height="40px" width="90px" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/13944/13944814.png"
              width="35"
              height="35"
              alt="menu icon"
              className="img-small"
            />
          </button>
          <div className="collapse navbar-collapse py-md-0 py-3" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 nav_ul pb-3 pb-md-0">
              <li className="nav_li">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav_li">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav_li">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="nav_li">
                <NavLink to="/contact">Contact us</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1040/1040225.png"
                width="26"
                height="26"
                alt="search icon"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setSearch(true)}
                className="img-small mx-3"
              />
              <NavLink to="">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4903/4903878.png"
                  width="26"
                  height="26"
                  alt="cart icon"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  onClick={() => setShowCart(true)}
                  className="img-small"
                />
                {!!cartCount && (
                  <span className="cart-total--item">{cartCount}</span>
                )}
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
      {showCart && <Cart setShowCart={setShowCart} />}
      {search && <Search setSearch={setSearch} />}
      
      {/* Modal HTML Structure */}
      <div 
        className="modal fade modal-xl"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row pb-4">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="search_input">
                      <input 
                        type="search"
                        className="form-control"
                        placeholder="SEARCH PRODUCTS..."
                      />
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                </div>
                {/* Include Search Results Component */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
