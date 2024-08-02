// src/components/Hero.tsx
import React from 'react';


const Home: React.FC = () => {
    return (
        <div>
    //     {/* Modal Search Start */}
    //     <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    //     <div className="modal-dialog modal-fullscreen">
    //         <div className="modal-content rounded-0">
    //             <div className="modal-header">
    //                 <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
    //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //             </div>
    //             <div className="modal-body d-flex align-items-center">
    //                 <div className="input-group w-75 mx-auto d-flex">
    //                     <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
    //                     <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // {/* Modal Search End */}

    {/* Hero Start */}
    <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-md-12 col-lg-7">
                    <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
                    <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
                    <div className="position-relative mx-auto">
                        <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="text" placeholder="Search" />
                        <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: '0', right: '25%' }}>Submit Now</button>
                    </div>
                </div>
                <div className="col-md-12 col-lg-5">
                    <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active rounded">
                                <img src="img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                                <a href="#" className="btn px-4 py-2 text-white rounded">Fruits</a>
                            </div>
                            <div className="carousel-item rounded">
                                <img src="img/hero-img-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                <a href="#" className="btn px-4 py-2 text-white rounded">Vegetables</a>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Hero End */}

    {/* Features Section Start */}
    <div className="container-fluid features py-5">
        <div className="container py-5">
            <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                    <div className="features-item text-center rounded bg-light p-4">
                        <div className="features-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                            <i className="fas fa-car-side fa-3x text-white"></i>
                        </div>
                        <div className="features-content text-center">
                            <h5>Free Shipping</h5>
                            <p className="mb-0">Free on order over $300</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="features-item text-center rounded bg-light p-4">
                        <div className="features-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                            <i className="fas fa-user-shield fa-3x text-white"></i>
                        </div>
                        <div className="features-content text-center">
                            <h5>Security Payment</h5>
                            <p className="mb-0">100% security payment</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="features-item text-center rounded bg-light p-4">
                        <div className="features-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                            <i className="fas fa-exchange-alt fa-3x text-white"></i>
                        </div>
                        <div className="features-content text-center">
                            <h5>30 Day Return</h5>
                            <p className="mb-0">30 day money guarantee</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="features-item text-center rounded bg-light p-4">
                        <div className="features-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                            <i className="fa fa-phone-alt fa-3x text-white"></i>
                        </div>
                        <div className="features-content text-center">
                            <h5>24/7 Support</h5>
                            <p className="mb-0">Support every time fast</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Features Section End */}

    {/* Fruits Shop Start */}
    <div className="container-fluid fruit py-5">
        <div className="container py-5">
            <div className="tab-class text-center">
                <div className="row g-4">
                    <div className="col-lg-4 text-start">
                        <h1>Our Organic Products</h1>
                    </div>
                    <div className="col-lg-8 text-end">
                        <ul className="nav nav-pills d-inline-flex text-center mb-5">
                            <li className="nav-item">
                                <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                    <span className="text-dark" style={{ width: '130px' }}>All Products</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                    <span className="text-dark" style={{ width: '130px' }}>Vegetables</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                    <span className="text-dark" style={{ width: '130px' }}>Fruits</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                    <span className="text-dark" style={{ width: '130px' }}>Bread</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                    <span className="text-dark" style={{ width: '130px' }}>Meat</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                                    {/* Sample Product Item */}
                                    {Array.from({ length: 8 }).map((_, index) => (
                                        <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruit-item">
                                                <div className="fruit-img">
                                                    <img src={`img/fruite-item-${index + 1}.jpg`} className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Product {index + 1}</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                                                            <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Additional Tabs can be implemented similarly */}
                </div>
            </div>
        </div>
    </div>
    {/* Fruits Shop End */}

    {/* Features Start */}
    <div className="container-fluid service py-5">
        <div className="container py-5">
            <div className="row g-4 justify-content-center">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                        <a href="#">
                            <div className={`service-item bg-${index % 2 === 0 ? 'secondary' : 'dark'} rounded border border-${index % 2 === 0 ? 'secondary' : 'dark'}`}>
                                <img src={`img/featur-${index + 1}.jpg`} className="img-fluid rounded-top w-100" alt="" />
                                <div className="px-4 rounded-bottom">
                                    <div className={`service-content bg-${index % 2 === 0 ? 'primary' : 'light'} text-center p-4 rounded`}>
                                        <h5 className={`text-${index % 2 === 0 ? 'white' : 'primary'}`}>Feature {index + 1}</h5>
                                        <h3 className="mb-0">{index % 2 === 0 ? '20% OFF' : 'Free delivery'}</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
    {/* Features End */}
    </div>
    );
};

export default Home;
