import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white selection:bg-red-500">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 relative">
          Passion på <span className="text-[#ecee72]">Disc</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto relative">
          Vi holder liv i det fysiske format i en digital tidsalder – for samlere, nostalgikere og feinschmeckere.
        </p>
      </section>

      <main className="max-w-6xl mx-auto px-6 pb-24 space-y-20">
        
        {/* Intro Card */}
        <section className="bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-[#ecee72]">Hvem er vi?</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              I en verden af flygtig streaming hylder vi det, der består. Vi er sat i verden for dem, der nægter at gå på kompromis med kvaliteten. 
              Uanset om det er lyden af en nål på en <strong className="text-white">LP</strong>, den skarpe opløsning på en <strong className="text-white">4K Blu-ray</strong>, eller gensynet med en klassiker på <strong className="text-white">DVD</strong>, har vi det på hylden.
            </p>
            <div className="bg-gradient-to-br from-[#ecee72]/20 to-transparent p-6 rounded-2xl border border-[#ecee72]/10">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2"><span className="h-4 w-[2px] bg-[#ecee72]"></span> Originale udgivelser</li>
                <li className="flex items-center gap-2"><span className="h-4 w-[2px] bg-[#ecee72]"></span> Kvalitetstjekket indhold</li>
                <li className="flex items-center gap-2"><span className="h-4 w-[2px] bg-[#ecee72]"></span> Hurtig og sikker fragt</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Salgs-sektion */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Vil du sælge din samling?</h2>
            <p className="text-gray-400">Vi opkøber alt fra enkelte perler til hele boer.</p>
          </div>

            <section className="selling-section">
                <div className="selling-grid">
                    <div className="action-card">
                        <h3>Salgsguide</h3>
                        <p>Lær hvordan du nemt kan kontakte os og få et uforpligtende tilbud på din samling.</p>
                        <button onClick={() => navigate('/salesguide/guide')} className="about-btn primary">Se salgsguide</button>
                    </div>

                    <div className="action-card">
                        <h3>Hvordan foregår det?</h3>
                        <p>Læs om vores proces, vurderingskriterier og hvordan vi sikrer dig en fair pris.</p>
                        <button onClick={() => navigate('/salesguide/info')} className="about-btn secondary">Læs om processen</button>
                    </div>
                </div>
            </section>
        </section>

        {/* Kontakt & Praktisk */}
        <section className="bg-white/5 border border-white/10 p-10 ">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#ecee72]"></span>
            Kontakt & Praktisk
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Virksomhed</h4>
              <p className="text-gray-300">CVR: 12345678</p>
              <p className="text-gray-300">Disc-vej 10, 8000 Aarhus</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Support</h4>
              <p className="text-gray-300">kontakt@disc-shop.dk</p>
              <p className="text-gray-300">Svartid: Indenfor 24 timer</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Certifikater</h4>
              <p className="text-[#ecee72] font-medium">✓ Autoriseret Brugthandler</p>
              <p className="text-[#ecee72] font-medium">✓ Sikker Betaling</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;