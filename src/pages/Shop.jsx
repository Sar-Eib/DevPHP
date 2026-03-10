import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './Shop.css';

export default function Shop() {
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon')
      .then(res => res.json())
      .then(data => setDrinks(data.drinks || []));
  }, []);

  return (
    <div className="shop-container">
        <div className="shop-title">
            <h1 >Drinks</h1>
            <img src="../images/lemonleaf.png" alt="leaf for decoration" />
        </div>
      
      
      <div className="shop-grid">
        {drinks.map(drink => (
          <div key={drink.idDrink} className="drink-card">
            <img 
              src={drink.strDrinkThumb} 
              alt={drink.strDrink} 
              className="drink-image" 
            />
            
            <div className="drink-info">
              <h3 className="drink-name">{drink.strDrink}</h3>
              <button 
                className="add-button"
                onClick={() => dispatch(addToCart(drink))}
              >
                Tilføj til kurv
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}