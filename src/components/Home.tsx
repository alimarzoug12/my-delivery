// src/components/Home.tsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import TheProducts from './TheProducts';
import Footer from './Footer';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <Navbar setSearchTerm={setSearchTerm} />
            <div className="container-fluid py-5 mt-7 mb-5 position-relative">
                <div className="container py-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '40vh' }}>
                    <video autoPlay muted loop className="position-absolute top-0 start-0" style={{ zIndex: -1, width: '100%', height: '70vh', objectFit: 'cover' }}>
                        <source src="img/burger 1.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="tab-class text-center">
                        <TheProducts searchTerm={searchTerm} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
