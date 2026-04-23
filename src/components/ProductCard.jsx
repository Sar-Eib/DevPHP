import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import '../pages/Shop.css';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
      />
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-btns">
          <button 
            className="desc-button"
            onClick={handleReadMore}
          >
            Læs mere
          </button>
          
          <button 
            className="add-button"
            onClick={() => dispatch(addToCart(product))}
          >
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;