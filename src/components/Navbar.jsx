import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  
  const items = useSelector((state) => state.cart?.items || []);
  const totalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Lukker menuen helt (bruges ved klik på links)
  const closeAll = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeAll}>
            <img style={{ height: '60px' }} src="disc.png" alt="Discover Logo" />
        </Link>

        <button className="burger-menu" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          
          {/* SHOP DROPDOWN */}
          <div className="nav-item dropdown">
            <Link to="/shop" className="nav-link" onClick={closeAll}>Shop</Link>
            <div className="dropdown-menu">
              <Link to="/shop/film" onClick={closeAll}>Film</Link>
              <Link to="/shop/spil" onClick={closeAll}>Spil</Link>
              <Link to="/shop/cd" onClick={closeAll}>CD</Link>
              <Link to="/shop/lp" onClick={closeAll}>LP</Link>
            </div>
          </div>

          {/* OM OS DROPDOWN */}
          <div className="nav-item dropdown">
            <Link to="/about" className="nav-link" onClick={closeAll}>Om os</Link>
            <div className="dropdown-menu">
              <Link to="/guide" onClick={closeAll}>Guide</Link>
              <Link to="/salg" onClick={closeAll}>Salg</Link>
              <Link to="/kontakt" onClick={closeAll}>Kontakt</Link>
            </div>
          </div>

          <Link to="/cart" className="cart-container" onClick={closeAll}>
            <img style={{ height: '25px' }} className="cart-icon" src="cart-shopping-solid-full-black.svg" alt=""/>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </div>

        <Link to="/cart" className="floating-cart-fab">
          <img style={{ height: '35px' }} className="cart-icon" src="cart-shopping-solid-full-black.svg" alt=""/>
          {totalItems > 0 && <span className="cart-badge-fab">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
}