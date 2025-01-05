// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#f1f1f1', marginTop: 'auto' }}>
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;