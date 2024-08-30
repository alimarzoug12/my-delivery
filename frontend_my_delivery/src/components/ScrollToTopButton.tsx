// src/components/ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';
//import './ScrollToTopButton.css'; // Ensure you create the corresponding CSS file
import { SlArrowUp } from "c:/Users/alima/my-delivery/frontend_my_delivery/node_modules/react-icons/sl/index";

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && 
                <div onClick={scrollToTop} className="scroll-to-top-button">
                   <h4><SlArrowUp /></h4>
                </div>
            }
        </div>
    );
};

export default ScrollToTopButton;
