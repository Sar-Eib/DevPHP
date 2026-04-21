import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setApiSource } from "../redux/sourceSlice"; 

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChoice = (source) => {
    console.log(`🔘 Knap trykket: Du har valgt kilden [${source.toUpperCase()}]`);
    // Vi tjekker om funktionen findes før vi kalder den
    if (setApiSource) {
      dispatch(setApiSource(source));
      console.log(`🚀 Redux opdateret. Navigerer nu til /shop med ${source} API...`);
      navigate('/shop');
    } else {
      console.error("setApiSource blev ikke fundet! Tjek din sourceSlice.js");
    }
  };

  return (
    <div className="discover-container" style={{ textAlign: 'center', color: 'white', paddingTop: '50px' }}>
      
      <h1>Velkommen til Discover</h1>
      <p>Vælg venligst en API-kilde:</p>

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px' }}>
        <button className="button" onClick={() => handleChoice('wordpress')}>
          Brug WordPress API
        </button>
        <button className="button" onClick={() => handleChoice('laravel')}>
          Brug Laravel API
        </button>
      </div>
    </div>
  );
}

export default Home;