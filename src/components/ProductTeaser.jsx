import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import '../pages/Shop.css';

function ProductTeaser({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="flex justify-center bg-white p-4 overflow-hidden min-w-[180px] max-w-[280px]">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-[150px] h-[200px] aspect-square object-cover border-b border-[#eee] self-center" 
      />
      
      <div className="mt-4 text-center">
        <h3 className="product-name">{product.name}</h3>
        
      </div>
    </div>
  );
}

export default ProductTeaser;