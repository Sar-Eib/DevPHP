import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProduct } from '../services/api';
import { addToCart } from '../redux/cartSlice';
import './Product.css';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const source = useSelector((state) => state.source.apiSource);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("🔄 Fetching product with ID:", id, "from source:", source);
    setLoading(true);
    getSingleProduct(id, source).then((data) => {
      if (data) {
        setProduct(data);
        setError(null);
      } else {
        setError('Produkt ikke fundet');
      }
      setLoading(false);
    }).catch((err) => {
      console.error('Error fetching product:', err);
      setError('Fejl ved hentning af produkt');
      setLoading(false);
    });
  }, [id, source]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      alert(`${product.name} tilføjet til kurv`);
    }
  };

  if (loading) {
    return <div className="product-detail-container"><p>Indlæser...</p></div>;
  }

  if (error) {
    return (
      <div className="product-detail-container">
        <p className="error-message">{error}</p>
        <button className="back-button" onClick={() => navigate('/shop')}>
          Tilbage til butik
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-container">
        <p>Produkt ikke fundet</p>
        <button className="back-button" onClick={() => navigate('/shop')}>
          Tilbage til butik
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={() => navigate('/shop')}>
        ← Tilbage til butik
      </button>

      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          
          <div className="product-detail-price">
            <span className="price-label">Pris:</span>
            <span className="price-value">{product.price.toFixed(2)} DKK</span>
          </div>

          <div className="product-detail-description">
            <h3>Beskrivelse</h3>
            <p>{product.desc}</p>
          </div>

          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Tilføj til kurv
          </button>
        </div>
      </div>
    </div>
  );
}
