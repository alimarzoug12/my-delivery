// src/components/Navbar.tsx
import React, { useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../slices/userSlice'; // Adjust this import according to your store setup
import { shopActions } from '../slices/shopSlice';

export default function NavbarSansSearch(){

    const totalQuantity = useSelector((state: RootState) => state.shop.totalQuantity);
    const  firstname  = useSelector((state: RootState) => state.user.firstname);
    const  lastname= useSelector((state: RootState) => state.user.lastname);
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    console.log("🚀 ~ firstname:", firstname)
    const [searchTerm, setLocalSearchTerm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(shopActions.clearShop());
        navigate('/signin'); 
    };
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
                    <a href="/"><img src="img/img-logo.png" style={{ height: '100px', marginLeft: '40px' }} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <NavLink to="/" className="nav-item nav-link" end>Home</NavLink>
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <div className="d-flex align-items-center">                           
                            <a href="/cart" className="position-relative me-4 my-auto">
                                <i className="fa fa-shopping-bag fa-2x"></i>
                                <span className="position-absolute bg-warning rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px', }}>
                                    {totalQuantity}
                                </span>
                            </a>
                            {isLoggedIn ? (
                                <div className="dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user fa-2x"></i>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li className="dropdown-item">{firstname} {lastname}</li>
                                        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                            ) : (
                                <a href="/signin" className="my-auto">
                                    <i className="fas fa-user fa-2x"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};


