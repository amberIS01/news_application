// src/components/ScrollToTop.js
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
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
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} style={scrollToTopButtonStyle}>
          ↑
        </button>
      )}
    </div>
  );
};

const scrollToTopButtonStyle = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  padding: '0.5rem 1rem',
  fontSize: '1.5rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};

export default ScrollToTop;