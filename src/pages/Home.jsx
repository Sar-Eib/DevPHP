import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setApiSource } from "../redux/sourceSlice";
import { clearFilter } from "../redux/filterSlice";
import DiscoverAll from '../components/DiscoverAll';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChoice = (source) => {
    console.log(`🔘 Knap trykket: Du har valgt kilden [${source.toUpperCase()}]`);
    // Vi tjekker om funktionen findes før vi kalder den
    if (setApiSource) {
      dispatch(setApiSource(source));
      dispatch(clearFilter()); // Clear any active filters when switching API
      console.log(`🚀 Redux opdateret. Navigerer nu til /shop med ${source} API...`);
      navigate('/shop');
    } else {
      console.error("setApiSource blev ikke fundet! Tjek din sourceSlice.js");
    }
  };

  return (
    <div className="discover-container" style={{ textAlign: 'center', color: 'white', paddingTop: '50px' }}>
      <div className="bg-[#1d2327] p-10 mb-8 border-b border-blue-500/30 font py-4 px-8 flex items-center justify-between shadow-lg sticky top-0 z-[100]">
        <div className="flex items-center gap-3">
          {/* Et lille admin-ikon */}
          <div className="bg-blue-600 p-1 rounded">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          
          <p className="text-sm md:text-base font-mono tracking-tight text-blue-100 uppercase font-medium">
            <span className="text-blue-400 font-bold mr-2">[CONFIG MODE]</span>
            Du kan vende tilbage til denne side via <span className="underline decoration-blue-500/50">'Disc' logoet</span> i toppen.
          </p>
        </div>
      </div>
      <h1 className="text-5xl leading-tight">Velkommen til Discover</h1>
      <p>Denne forside fungerer som en oversigt og indgangsvinkel til vores multi-API projekt med forskellige backend-arkitekturer.</p>
      <p>Vælg venligst en API-kilde:</p>

      <div className="api-choice">
        <button className="rounded text-black font-bold bg-[#ecee72] w-full md:w-[80%] lg:w-[20%] w-lg-20 hover:bg-black hover:border-[#ecee72] hover:text-[#ecee72] py-2.5 px-5" onClick={() => handleChoice('wordpress')}>
          Brug WordPress API
        </button>
        <button className="rounded text-black font-bold bg-[#ecee72] w-full md:w-[80%] lg:w-[20%] w-lg-20 hover:bg-black hover:border-[#ecee72] hover:text-[#ecee72] py-2.5 px-5" onClick={() => handleChoice('laravel')}>
          Brug Laravel API
        </button>
      </div>

      <DiscoverAll />
    </div>
  );
}

export default Home;