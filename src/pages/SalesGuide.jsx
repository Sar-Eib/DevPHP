import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SalesGuide from '../components/Guide';
import SalesInfo from '../components/Info';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';


const SalesPage = () => {
  // useParams snupper ":view" delen fra URL'en (/sales/guide -> view = "guide")
  const { view } = useParams();
  const navigate = useNavigate();

  // Her bestemmer vi hvilken komponent der skal vises
  const renderContent = () => {
    switch(view) {
      case 'guide':
        return <SalesGuide />;
      case 'info':
        return <SalesInfo />;
      case 'form':
        return <Form />;
      default:
        return <SalesGuide />; // Standard hvis intet matcher
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* En simpel intern navigation på sales-siden */}
        <nav className="flex gap-4 mb-12 border-b border-white/10 pb-4">
          <Link 
            to="/salesguide/guide" 
            className={`hover:text-[#ecee72] transition-colors ${view === 'guide' ? 'text-[#ecee72] font-bold' : 'text-white'}`}
          >
            Guide
          </Link>

          <Link 
            to="/salesguide/info" 
            className={`hover:text-[#ecee72] transition-colors ${view === 'info' ? 'text-[#ecee72] font-bold' : 'text-white'}`}
          >
            Info
          </Link>

          <Link 
            to="/salesguide/form" 
            className={`hover:text-[#ecee72] transition-colors ${view === 'form' ? 'text-[#ecee72] font-bold' : 'text-white'}`}
          >
            Kontakt
          </Link>
        </nav>

        {/* Her bliver den valgte komponent "tegnet" */}
        <div className="animate-fadeIn">
          {renderContent()}
        </div>
        
      </div>
    </div>
  );
};

export default SalesPage;