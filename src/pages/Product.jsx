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

  const formatDate = (value) => {
    if (!value) return 'Ikke angivet';

    if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
      const [day, month, year] = value.split('/').map(Number);
      const date = new Date(year, month - 1, day);
      return Number.isNaN(date.getTime())
        ? value
        : date.toLocaleDateString('da-DK', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });
    }

    const date = new Date(value);
    return Number.isNaN(date.getTime())
      ? value
      : date.toLocaleDateString('da-DK', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
  };

  const getTypeDescription = (typeName) => {
    const value = String(typeName || '').toLowerCase();

    if (value === 'film') return 'Film: Historiefortalt videoindhold til afspilning.';
    if (value === 'spil') return 'Spil: Interaktiv underholdning til konsol eller computer.';
    if (value === 'cd') return 'CD: Kompakt disk med lyd, typisk musik.';
    if (value === 'lp') return 'LP: Vinylplade med analog lyd i fuld længde.';

    return 'Produktkategori for denne vare.';
  };

  const getGradeDescription = (gradeName) => {
    const value = String(gradeName || '').toLowerCase();

    if (value === 's') return 'S: Som ny stand med minimale brugsspor.';
    if (value === 'a') return 'A: Meget god stand med få tegn på brug.';
    if (value === 'b') return 'B: God stand med synlige, men acceptable brugsspor.';
    if (value === 'god') return 'God: Varen er funktionel og i pæn stand.';

    return 'Vurdering af produktets fysiske stand.';
  };

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

          <div className="product-meta-grid">
            <div className="meta-item tooltip-target">
              <span className="meta-label">Type</span>
              <span className="meta-value">
                {product.type?.name || 'Ikke angivet'}
                {product.type?.name && (
                  <span className="tooltip-popup">{getTypeDescription(product.type.name)}</span>
                )}
              </span>
            </div>
            <div className="meta-item tooltip-target">
              <span className="meta-label">Stand</span>
              <span className="meta-value">
                {product.grade?.name || 'Ikke angivet'}
                {product.grade?.name && (
                  <span className="tooltip-popup">{getGradeDescription(product.grade.name)}</span>
                )}
              </span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Digital</span>
              <span className="meta-value">{product.digital?.name || 'Ikke angivet'}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Lager</span>
              <span className="meta-value">{product.stock ?? 'Ikke angivet'}</span>
            </div>
            <div className="meta-item meta-item-full">
              <span className="meta-label">Udgivelse</span>
              <span className="meta-value">{formatDate(product.release)}</span>
            </div>
          </div>

          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Tilføj til kurv
          </button>
        </div>
      </div>
    </div>
  );
}
