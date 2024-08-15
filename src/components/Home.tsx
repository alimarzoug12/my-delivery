// src/components/Hero.tsx
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import SearchModal from './SearchModal';
import OurProducts from './OurProducts';
import TheProducts from './TheProducts';




export default function Home() {
    



    return (
        <div>
            <SearchModal />
            <div className="container-fluid py-5 mt-7 mb-5 position-relative">
                
                <div className="container py-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '40vh' }}>
                    <video autoPlay muted loop className="position-absolute top-0 start-0 " style={{ zIndex: -1, width: '100%', height: '70vh', objectFit: 'cover'}} >
                    <source src="img/burger 1.mp4" type="video/mp4" />
                    </video> 
                
            </div></div><div>
            <div className="container-fluid fruite py-5 ">
                <div className="container py-5">
                    <div className="tab-class text-center">
                        <OurProducts />
                        <TheProducts />


                    </div>
                </div>
            </div></div>
            
        </div>
    );
};

