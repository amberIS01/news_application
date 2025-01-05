import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Lazy loading for pages
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Categories = lazy(() => import('./pages/categories'));
const AddArticle = lazy(() => import('./pages/AddArticle'));
const NewsArticles = lazy(() => import('./components/NewsArticles'));
const Login = lazy(() => import('./components/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Logout Button Component
const LogoutButton = ({ handleLogout }) => {
  return (
    <button
      onClick={handleLogout}
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        padding: '10px 20px',
        backgroundColor: '#ff4d4f',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
      }}
    >
      Logout
    </button>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        {isLoggedIn && <LogoutButton handleLogout={logout} />}
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/login" element={!isLoggedIn ? <Login login={login} /> : <Navigate to="/news" />} />
              <Route
                path="/"
                element={isLoggedIn ? <NewsArticles /> : <Navigate to="/login" />}
              />
              <Route
                path="/news"
                element={isLoggedIn ? <NewsArticles /> : <Navigate to="/login" />}
              />
              <Route
                path="/about"
                element={isLoggedIn ? <About /> : <Navigate to="/login" />}
              />
              <Route
                path="/contact"
                element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
              />
              <Route
                path="/categories"
                element={isLoggedIn ? <Categories /> : <Navigate to="/login" />}
              />
              <Route
                path="/add"
                element={isLoggedIn ? <AddArticle /> : <Navigate to="/login" />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App;