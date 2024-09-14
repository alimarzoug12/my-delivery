// src/components/Contact.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import NavbarSansSearch from './NavbarSansSearch';

export default function Contact() {
    return (
        <div>
            <NavbarSansSearch />

            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="p-5 bg-light rounded">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="text-center mx-auto" style={{ maxWidth: '700px' }}>
                                    <h1 className="text-primary">The location</h1>                                   
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="h-100 rounded">
                                    <iframe className="rounded w-100" style={{ height: '400px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.2947993155184!2d9.016503315357005!3d33.37800108073596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e4e9177f1aa3d9%3A0xf65e18c1c6e31a8!2s12%20Rue%20Al%20Nasr%2C%20Abadla%2C%20Douz!5e0!3m2!1sen!2stn!4v1694259649153!5m2!1sen!2stnhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.2947993155184!2d9.021833!3d33.468166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e4e9177f1aa3d9%3A0xf65e18c1c6e31a8!2s33%C2%B028'05.4%22N%209%C2%B001'18.6%22E!5e0!3m2!1sen!2stn!4v1694259649153!5m2!1sen!2stn" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <form action="">
                                    <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
                                    <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
                                    <textarea className="w-100 form-control border-0 mb-4" rows={5} cols={10} placeholder="Your Message"></textarea>
                                    <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary" type="submit">Submit</button>
                                </form>
                            </div>
                            <div className="col-lg-5">
                                <div className="d-flex p-4 rounded mb-4 bg-white">
                                    <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                    <div>
                                        <h4>Address</h4>
                                        <p className="mb-2">12 Rue Al Nasr, Abadla, Douz</p>
                                    </div>
                                </div>
                                <div className="d-flex p-4 rounded mb-4 bg-white">
                                    <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                    <div>
                                        <h4>Mail Us</h4>
                                        <p className="mb-2">ali.marzoug14@gmail.com</p>
                                    </div>
                                </div>
                                <div className="d-flex p-4 rounded bg-white">
                                    <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                    <div>
                                        <h4>Telephone</h4>
                                        <p className="mb-2">(+216) 20190055</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

