export default function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <li style={{ borderBottom: '1px solid #ddd', padding: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={item.image} alt={item.name} style={{ width: '50px', borderRadius: '5px', marginRight: '15px' }} />
        <div>
          <h4 style={{ margin: 0 }}>{item.name}</h4>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>Pris: {item.price} kr.</p>
        </div>
      </div>
      <div>
        <button onClick={() => onQuantityChange(item.id, item.quantity, 1)}>+</button>
        <span style={{ margin: '0 10px' }}>{item.quantity}</span>
        <button onClick={() => onQuantityChange(item.id, item.quantity, -1)}>-</button>
        <button onClick={() => onRemove(item.id)} style={{ marginLeft: '15px', color: 'red' }}>Fjern</button>
      </div>
    </li>
  );
}