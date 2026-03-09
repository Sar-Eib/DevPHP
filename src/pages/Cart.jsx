import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Funktion til at ændre antal (sikrer man ikke går under 1)
  const handleQuantityChange = (id, currentQty, change) => {
    const newQty = currentQty + change;
    if (newQty > 0) {
      dispatch(updateQuantity({ id, quantity: newQty }));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Din Kurv 🛒</h1>

      {cartItems.length === 0 ? (
        <p>Kurven er tom. Gå til shoppen for at finde lækre lemon-drinks!</p>
      ) : (
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map((item) => (
              <li key={item.idDrink} style={{ 
                borderBottom: '1px solid #ddd', 
                padding: '10px 0', 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={item.strDrinkThumb} alt={item.strDrink} style={{ width: '50px', borderRadius: '5px', marginRight: '15px' }} />
                  <div>
                    <h4 style={{ margin: 0 }}>{item.strDrink}</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>Antal: {item.quantity}</p>
                  </div>
                </div>

                <div>
                  {/* Knapper til at styre antal */}
                  <button onClick={() => handleQuantityChange(item.idDrink, item.quantity, 1)} style={{ marginRight: '5px' }}>+</button>
                  <button onClick={() => handleQuantityChange(item.idDrink, item.quantity, -1)} style={{ marginRight: '10px' }}>-</button>
                  
                  {/* Knap til at fjerne helt */}
                  <button 
                    onClick={() => dispatch(removeFromCart(item.idDrink))} 
                    style={{ backgroundColor: '#ff4444', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
                  >
                    Fjern
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Checkout Sektion */}
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #eee' }}>
            <h3>Checkout Oversigt</h3>
            <p>Total antal produkter: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
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
        </div>
      )}
    </div>
  );
}