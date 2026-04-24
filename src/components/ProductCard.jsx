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

        {/* Pris og Stand sektion med Tailwind */}
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Pris:</span>
            <span className="text-black px-3 py-1 font-bold text-base">
              {product.price?.toFixed(2)} DKK
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm border-l-2 border-[#ecee72] pl-3">
            <span className="font-semibold text-gray-600">Stand:</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-900 font-medium">
              {product.grade?.name || 'Ikke angivet'}
            </span>
          </div>
        </div>
        
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