import { useSelector, useDispatch } from 'react-redux';
import { sellLemonade, buyLemons } from '../redux/profitSlice';

function LemonadeStand() {
  const profit = useSelector((state) => state.profit.value);
  
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
      <img style={{ height: '200px' }} src="../images/lemonslogo.png" alt="" />
      
      <h2>Aktuel Profit: ${profit}</h2>

      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => dispatch(sellLemonade())}
          style={{ padding: '10px 20px', cursor: 'pointer', marginRight: '10px' }}
        >
          Sælg Lemonade (+$5)
        </button>

        <button 
          onClick={() => dispatch(buyLemons())}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Køb Citroner (-$2)
        </button>
      </div>
    </div>
  );
}

export default LemonadeStand;