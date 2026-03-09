import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function Shop() {
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon')
      .then(res => res.json())
      .then(data => setDrinks(data.drinks || []));
  }, []);

  return (
    <div>
      <h1>Lemon Drink Shop</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {drinks.map(drink => (
          <div key={drink.idDrink} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} style={{ width: '100%' }} />
            <h3>{drink.strDrink}</h3>
            <button onClick={() => dispatch(addToCart(drink))}>Tilføj til kurv</button>
          </div>
        ))}
      </div>
    </div>
  );
}