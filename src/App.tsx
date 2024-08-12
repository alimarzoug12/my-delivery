// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchModal from './components/SearchModal';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Home from './components/Home'; 
import Shop from './components/Shop'; 
import Contact from './components/Contact'; 
import './App.css'; // Your custom styles
import ProductDetail from './components/ProductDetail';
import Testimonial from './components/Testimonial';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import PageHeader from './components/PageHeader';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useLocation } from 'react-router-dom'; // Import useLocation here
import Index from './pages';

const App: React.FC = () => {
    return (
        <Router>
            <MainContent />
        </Router>
    );
};

const MainContent: React.FC = () => {
    const location = useLocation(); // Move useLocation here

    const getTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Welcome';
            case '/checkout':
                return 'Checkout';
            case '/cart':
                return 'Your Cart';
            case '/testimonial':
                return 'Testimonials';
            case '/productDetail':
                return 'Product Details';
            case '/shop':
                return 'Shop';
            case '/contact':
                return 'Contact Us';
            default:
                return 'Page Not Found';
        }
    };

    return (
        <>
            <Navbar />
            <SearchModal />
            {/* <PageHeader title={getTitle()} /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/productDetail" element={<ProductDetail />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollToTopButton />
            <Footer />
        </>
    );
};

export default App;
