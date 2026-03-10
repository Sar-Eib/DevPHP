import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withdrawMoney } from '../redux/profitSlice';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Her rettet fra 'amount' til 'value' for at matche din slice!
  const { value, totalSales } = useSelector((state) => state.profit);
  const dispatch = useDispatch();

  const ADMIN_PASSWORD = "1234"; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Forkert kode!");
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="page-container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>🔒 Admin Log ind</h1>
        <form onSubmit={handleLogin} style={{ background: '#333', padding: '30px', borderRadius: '15px', display: 'inline-block' }}>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Kodeord..."
            style={{ padding: '10px', borderRadius: '5px', border: 'none', marginRight: '10px' }}
          />
          <button type="submit">Lås op</button>
        </form>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>💼 Admin Dashboard</h1>
        <button onClick={() => setIsAuthenticated(false)} style={{ background: '#555' }}>Log ud</button>
      </div>
      
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: '30px' }}>
        <div style={{ background: '#333', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
          <h3>Nuværende Profit</h3>
          {/* Her bruger vi 'value' i stedet for 'amount' */}
          <p style={{ fontSize: '2.5rem', color: '#4caf50' }}>{Number(value).toFixed(2)} kr.</p>
        </div>
        
        <div style={{ background: '#333', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
          <h3>Antal Salg</h3>
          <p style={{ fontSize: '2.5rem', color: '#2196f3' }}>{totalSales || 0} stk.</p>
        </div>
      </div>

      <div style={{ background: '#2a2a2a', padding: '25px', borderRadius: '15px' }}>
        <h3>💰 Udbetaling</h3>
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <button onClick={() => dispatch(withdrawMoney(10))}>Hæv 10 kr.</button>
          <button 
            onClick={() => dispatch(withdrawMoney(value))} 
            style={{ background: '#ff4444' }}
          >
            Tøm kassen ({Number(value).toFixed(2)} kr.)
          </button>
        </div>
      </div>
    </div>
  );
}