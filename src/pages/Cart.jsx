import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import CartItem from '../components/CartItem';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0);

  const handleQuantityChange = (id, currentQty, change) => {
    const newQty = currentQty + change;
    if (newQty === 0) {
      dispatch(removeFromCart(id));
    } else if (newQty > 0) {
      dispatch(updateQuantity({ id, quantity: newQty }));
    }
  };

  return (
    <div className="p-5 md:p-10 min-h-screen bg-gradient-to-t from-black to-black/50 text-white flex flex-col items-center">
  {/* Overskrift - Centreret */}
  <header className="w-full max-w-5xl text-center mb-10">
    <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
      Din Kurv
    </h1>
  </header>

  {cartItems.length === 0 ? (
    <div className="flex flex-col items-center justify-center py-20">
      <p className="text-gray-400 text-lg">Kurven er tom. Gå til shoppen!</p>
    </div>
  ) : (
    /* Container der skifter layout ved desktop (lg:) */
    <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-10">
      
      {/* Liste med produkter - fylder mest */}
      <div className="flex-grow w-full">
        <ul className="list-none p-0 m-0 space-y-4">
          {cartItems.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onQuantityChange={handleQuantityChange}
              onRemove={(id) => dispatch(removeFromCart(id))}
            />
          ))}
        </ul>
      </div>

      {/* Checkout Oversigt - Centreret indhold og responsiv bredde */}
      <div className="w-full lg:w-[350px] mt-8 lg:mt-0 p-6 rounded-lg border border-gray-100/10 bg-white/5 self-start">
        <h3 className="text-xl font-bold mb-6 text-center lg:text-left">Checkout Oversigt</h3>
        
        <div className="space-y-3 mb-6 font-medium">
          <div className="flex justify-between">
            <span className="text-gray-400">Total antal:</span>
            <span>{cartItems.reduce((total, item) => total + item.quantity, 0)} stk.</span>
          </div>
          <div className="flex justify-between text-lg border-t border-gray-100/10 pt-3">
            <span>Samlet pris:</span>
            <span className="text-[#ecee72] font-bold">{totalPrice} kr.</span>
          </div>
        </div>

        <button className="w-full py-3 bg-[#ecee72] text-black font-bold uppercase tracking-wider rounded hover:bg-black hover:text-[#ecee72] hover:border-[#ecee72] transition-colors cursor-pointer text-center">
          Gå til betaling
        </button>
      </div>
    </div>
  )}
</div>
  );
}