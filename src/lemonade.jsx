import { useState } from 'react'
import './lemonade.css'

function LemonadeStand() {
  const [profit, setProfit] = useState(0)

  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Lemonade Stand</h1>
        <h2>Aktuel Profit: ${profit}</h2>

        {/* Knap til at sælge: Vi tager den nuværende profit og lægger 5 til */}
        <button onClick={() => setProfit(profit + 5)} style={{ marginRight: '10px' }}>
          Sælg Lemonade (+$5)
        </button>

        {/* Knap til at købe: Vi tager den nuværende profit og trækker 2 fra */}
        <button onClick={() => setProfit(profit - 2)}>
          Køb Citroner (-$2)
        </button>
      </div>
    </>
  );
}

export default LemonadeStand;