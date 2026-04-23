import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import CartItem from '../components/CartItem';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

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
        </>
      )}
    </div>
  );
}