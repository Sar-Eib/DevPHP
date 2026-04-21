import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import './Shop.css';

export default function Shop() {
  const source = useSelector((state) => state.source.apiSource); // Hent kilden ('wordpress' eller 'laravel')
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("🔄 Shop-komponenten fetcher nu data fra kilden:", source);
    getProducts(source).then(data => setProducts(data));
  }, [source]);

  return (
    
    <div className="shop-container">
      
      <div className="shop-title">
          <h1 >DVD'er</h1>
      </div>
      
      <div>
        <div className="shop-grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}