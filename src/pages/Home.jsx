import { useSelector, useDispatch } from 'react-redux';
import { sellLemonade, buyLemons } from '../redux/profitSlice';

function LemonadeStand() {
  const profit = useSelector((state) => state.profit.value);
  
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
        <img style={{ height: '100px' }} src="../logo-disc.png" alt="" />
      </div>
      <div>

      </div>
    </div>
  );
}

export default LemonadeStand;