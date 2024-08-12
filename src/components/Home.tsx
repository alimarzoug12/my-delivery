// src/components/Hero.tsx
import React, {useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import card from '../card.json';




export default function Home(){
    const handleClick = (category: any) => {
        // Update the modal content
        const modalTitle = document.getElementById('modalShopLabel');
        const modalBody = document.querySelector('#modalShop .modal-body');
    
        if (modalTitle && modalBody) {
            modalTitle.innerText = category.title;
            modalBody.innerHTML = `
                <h4>${category.title}</h4>
                <img src="${category.imageUrl.Default.urlDefault}" class="img-fluid w-100 rounded-top mb-3" alt="${category.title}" style="height: 150px;" />
                <p>${category.description.Default.nameDefault}</p>
            `;
        }
    
        // Show the modal
        const modalElement = document.getElementById('modalShop');
        if (modalElement) {
            modalElement.classList.add('show');
            modalElement.style.display = 'block';
            modalElement.removeAttribute('aria-hidden');
            modalElement.setAttribute('aria-modal', 'true');
    
            const backdrop = document.createElement('div');
            backdrop.className = 'modal-backdrop fade show';
            document.body.appendChild(backdrop);
        }
    };
    
      const handleClose = () => {
        const modalElement = document.getElementById('modalShop');
        const backdrop = document.getElementById('modalBackdrop');
        if (modalElement) {
          modalElement.classList.remove('show');
          modalElement.style.display = 'none';
          modalElement.setAttribute('aria-hidden', 'true');
          modalElement.removeAttribute('aria-modal');
    
          if (backdrop) {
            document.body.removeChild(backdrop);
          }
        }
      };
    //   const [categories, setCategories] = useState<CardData []>([]);

    //   useEffect(() => {
    //     fetch('./card.json')
    //       .then((response) => response.json())
    //       .then((data) => setCategories(data))
    //       .catch((error) => console.error('Error fetching categories:', error));
    //   }, []);
    const shopCard :any=card
    const categories:any=shopCard[0].categories
    const categoriesArray = Object.values(categories).flatMap((categoriee: any) => categoriee.categoriesIuud);



    return (
        <div>
         {/* Modal Search Start */}
         <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="modalShopLabel" aria-hidden="true">
         <div className="modal-dialog modal-fullscreen">
             <div className="modal-content rounded-0">
                 <div className="modal-header">
                     <h5 className="modal-title" id="modalShopLabel">Search by keyword</h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div className="modal-body d-flex align-items-center">
                     <div className="input-group w-75 mx-auto d-flex">
                         <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                         <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     Modal Search End

    {/* Hero Start */}

    <div className="modal fade" id="modalShop" tabIndex={-1} aria-labelledby="modalShopLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="modalShopLabel"></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
                
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Cancel</button>
                <button type="button" className="btn btn-primary">Next</button>
            </div>
        </div>
    </div>
</div>
   

    <div className="container-fluid py-5 mt-7 mb-5 position-relative">
    <video autoPlay muted loop className="position-absolute top-0 start-0 " style={{ zIndex: -1, width: '100%', height: '70vh', objectFit: 'cover' }} // Adjust height as needed
>
            <source src="img/burger 1.mp4" type="video/mp4" />
        </video>
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-md-12 col-lg-7">
                    <h1 className="mb-5 mt-5 display-9 text-primary">My Delivery Foods</h1>
                    <div className="position-relative mx-auto">
                        <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="text" placeholder="Search" />
                        <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: '0', right: '25%' }}>Submit Now</button>
                    </div>
                </div>
                {/* <div className="col-md-12 col-lg-5 scrollable-carousel">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src="img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src="img/hero-img-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a>
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
                    </div> */}

            </div>
        </div>
    </div>
    {/* Hero End */}

    {/* Features Section Start */}
    {/* <div className="container-fluid features py-5">
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
    </div> */}
    {/* Features Section End */}

    {/* Fruits Shop Start */}
    <div className="container-fluid fruite py-5">
        <div className="container py-5">
            <div className="tab-class text-center">
                <div className="row g-4">
                    <div className="col-lg-4 text-start">
                        <h1>Our Products</h1>
                    </div>
                    <div className="col-lg-8 text-end">
                        <ul className="nav nav-pills d-inline-flex text-center mb-5">
                            <li className="nav-item">
                                <a className="d-flex m-2 py-2 bg-light rounded-pill nav-link active" data-bs-toggle="pill" href="#tab-1">
                                    <span className="text-dark" style={{ width: '100px' }}>All Products</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex py-2 m-2 bg-light rounded-pill nav-link" data-bs-toggle="pill" href="#tab-2">
                                    <span className="text-dark" style={{ width: '100px' }}>Les plus populaires</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex m-2 py-2 bg-light rounded-pill nav-link" data-bs-toggle="pill" href="#tab-3">
                                    <span className="text-dark " style={{ width: '100px' }}>Croquez le monde</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex m-2 py-2 bg-light rounded-pill nav-link" data-bs-toggle="pill" href="#tab-4">
                                    <span className="text-dark" style={{ width: '100px' }}>Nos menus Bergers</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex m-2 py-2 bg-light rounded-pill nav-link" data-bs-toggle="pill" href="#tab-5">
                                    <span className="text-dark" style={{ width: '130px' }}>Menu MCFIRST</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content ">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                            {Object.keys(categories).length > 0 ? (
                                Object.values(categories).map((category:any) => (
                                    <div className="col-md-6 col-lg-4 col-xl-3" key={category.id}>
                                        <div 
                                            className="rounded position-relative fruite-item border border-warning" 
                                            onClick={() => handleClick(category)}
                                        >
                                            <div className="fruite-img">
                                                <img 
                                                    src={category.imageUrl.Default.urlDefault} 
                                                    className="img-fluid w-100 rounded-top"  
                                                    alt={category.title} 
                                                    style={{ height: '150px' }} 
                                                />
                                            </div>
                                            <div className="p-4 rounded-bottom">
                                                <h4 className='pb-3 pt-2'>{category.title}</h4>
                                                <p style={{color: 'rgba(0, 0, 0, 0.6)'}}>{category.description.Default.nameDefault}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No categories available</p>
                            )}
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>


            </div>
        </div>
    </div>
    {/* Fruits Shop End */}

    {/* Features Start */}
    {/* <div className="container-fluid service py-5">
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
    </div> */}
    {/* Features End */}
    </div>
    );
};

