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
    <div style={{ padding: '20px' }}>
      <h1>Din Kurv 🛒</h1>
      {cartItems.length === 0 ? (
        <p>Kurven er tom. Gå til shoppen!</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onQuantityChange={handleQuantityChange}
                onRemove={(id) => dispatch(removeFromCart(id))}
              />
            ))}
          </ul>
          <div style={{ marginTop: '30px', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }}>
            <h3>Checkout Oversigt</h3>
            <p>Total antal produkter: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
            <p>Samlet pris: {totalPrice} kr.</p>
            <button style={{ 
              width: '100%', 
              padding: '10px', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              border: 'none', 
              fontSize: '1rem',
              cursor: 'pointer'
            }}>
              Gå til betaling
            </button>
          </div>
        </>
      )}
    </div>
  );
}