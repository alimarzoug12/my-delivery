// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
            <div className="container py-5">
                <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)' }}>
                    <div className="row g-4">
                        <div className="col-lg-3 nav-item ">
                            <a href="#" className='nav-link'>
                                <h1 className="text-primary mb-0">My Delivery</h1>
                                <p className="text-secondary mb-0">Fresh products</p>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mx-auto">
                                <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="text" placeholder="Your Email" />
                                <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{ top: 0, right: 0 }}>Subscribe Now</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex justify-content-end pt-3">
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="https://x.com/AliMarzoug12"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="https://www.facebook.com/ali.marzoug.14"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="https://www.youtube.com/@alimarzoug4455"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-secondary btn-md-square rounded-circle" href="https://www.linkedin.com/in/ali-marzoug-b7a022209/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Additional footer content */}
            </div>
        </div>
    );
};

export default Footer;
