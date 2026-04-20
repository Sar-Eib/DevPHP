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
      <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
        <img style={{ height: '100px' }} src="../images/logo-disc.png" alt="Discover logo" />
      </div>
      <div className="shop-title">
          <h1 >DVD'er</h1>
      </div>
      
      
      <div>
        <div className="shop-grid">
        {drinks.map(drink => (
          <div key={drink.idDrink} className="product-card">
            <img 
              src={drink.strDrinkThumb} 
              alt={drink.strDrink} 
              className="product-image" 
            />
            
            <div className="product-info">
              <h3 className="product-name">{drink.strDrink}</h3>
              <div class="product-info">

              </div>
              <div class="product-btns">
                <button 
                  className="desc-button"
                  onClick={() => dispatch()}
                >
                  Læs mere
                </button>
                <button 
                  className="add-button"
                  onClick={() => dispatch(addToCart())}
                ></button>
                
              </div>
              
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}