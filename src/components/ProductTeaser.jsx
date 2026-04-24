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
    <div className="flex flex-col bg-white p-5 border border-gray-200 shadow-sm min-w-[240px] max-w-[320px]">
      {/* Kilde-badge (Admin info) */}
      <div className="flex justify-between items-start mb-3">
        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${product.source === 'laravel' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
          {product.source}
        </span>
        <span className="text-[10px] text-gray-400">ID: {product.id}</span>
      </div>

      <img 
        src={product.image} 
        alt={product.name} 
        className="w-[120px] h-[160px] object-cover border border-[#eee] self-center shadow-sm" 
      />
      
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-900 truncate border-b pb-2 mb-3">{product.name}</h3>
        
        {/* Admin Data Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[12px]">
          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold uppercase">Pris</span>
            <span className="text-black font-bold">{product.price?.toFixed(2)} DKK</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold uppercase">Stand</span>
            <span className="text-black">{product.grade?.name || 'N/A'}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold uppercase">Type</span>
            <span className="text-black">{product.type?.name || 'N/A'}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold uppercase">Lager</span>
            <span className={`font-bold ${product.stock < 5 ? 'text-red-500' : 'text-green-600'}`}>
              {product.stock ?? '0'} stk.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold uppercase">Udgivelse</span>
            <span className="text-black truncate">{product.release || 'Ukendt'}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold uppercase">Digital</span>
            <span className="text-black">{product.digital?.name || 'Nej'}</span>
          </div>
        </div>

        {/* Kort beskrivelse (snippet) */}
        <div className="mt-4 pt-3 border-t italic text-[11px] text-gray-500 leading-snug">
          {product.desc ? `${product.desc.substring(0, 60)}...` : 'Ingen beskrivelse.'}
        </div>

      </div>
    </div>
  );
}

export default ProductTeaser;