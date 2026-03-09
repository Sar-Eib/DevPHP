import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  
  const items = useSelector((state) => state.cart?.items || []);
  const totalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">Lemonade Stand</Link>
        <button className="burger-menu" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" className="nav-link" onClick={() => setIsOpen(false)}>Shop</Link>
          
          <Link to="/cart" className="cart-container" onClick={() => setIsOpen(false)}>
            <span className="cart-icon">🛒</span>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </div>
        <Link to="/cart" className="floating-cart-fab">
          <span className="cart-icon">🛒</span>
          {totalItems > 0 && <span className="cart-badge-fab">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
}