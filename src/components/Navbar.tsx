// src/components/Navbar.tsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC = () => {

    return (
        <div className="container-fluid fixed-top">
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3">
                            <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                            <a href="/contact" className="text-white">Leader Solution Tactile</a>
                        </small>
                        <small className="me-3">
                            <i className="fas fa-envelope me-2 text-secondary"></i>
                            <a href="mailto:admin@aureskonnect.com" className="text-white">admin@aureskonnect.com</a>
                        </small>
                    </div>
                    <div className="top-link pe-2">
                        <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                        <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
                        <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
                    </div>
                </div>
            </div>
            <div className="container px-0 my-2">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <a href="/"><img src="img/img-logo.png" style={{height: '100px',marginLeft:'40px' }} alt="/"/></a>
                    {/* <NavLink to="/" className="navbar-brand"><h1 className="text-primary display-8">My Delivery</h1></NavLink> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <NavLink to="/" className="nav-item nav-link" end>Home</NavLink>
                            {/* <NavLink to="/shop" className="nav-item nav-link">Shop</NavLink>
                            <NavLink to="/productDetail" className="nav-item nav-link">Shop Detail</NavLink> */}
                            <NavLink to="/cart" className="nav-item nav-link">Cart</NavLink>
                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <NavLink to="/cart" className="dropdown-item">Cart</NavLink>
                                    <NavLink to="/checkout" className="dropdown-item">Checkout</NavLink>
                                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                    <NavLink to="/404" className="dropdown-item">404 Page</NavLink>
                                </div>
                            </div> */}
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <div className="d-flex m-3 me-0">
                            <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                            <a href="/cart" className="position-relative me-4 my-auto">
                                <i className="fa fa-shopping-bag fa-2x"></i>
                                <span className="position-absolute bg-warning rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: '-5px',left: '15px',height: '20px',minWidth: '20px', }}>0</span>
                            </a>
                            <a href="#" className="my-auto">
                                <i className="fas fa-user fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
