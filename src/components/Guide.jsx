import React from 'react';
import { useNavigate } from 'react-router-dom';

const SalesGuide = () => {
    const navigate = useNavigate();
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      
      {/* Overskrift sektion */}
      <header className="border-l-4 border-[#ecee72] pl-6 py-2">
        <h2 className="text-4xl font-black uppercase tracking-tight">Salgsguide</h2>
        <p className="text-gray-400 mt-2 text-lg">Gør din samling klar til en ny æra. Her er hvordan du gør.</p>
      </header>

      {/* Steps - Horisontal tidslinje på desktop, vertikal på mobil */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Step 1 */}
        <div className="relative p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-[#ecee72]/50 transition-all">
          <span className="text-5xl font-black text-[#ecee72]/20 absolute top-4 right-6 group-hover:text-[#ecee72]/40 transition-colors">01</span>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ecee72] rounded-full"></span>
            Sortér & Tjek
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Gennemgå dine discs (DVD, Blu-ray, CD, Spil). Tjek at de er i de originale covers, og at selve skiverne ikke har dybe ridser, der påvirker afspilningen.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-[#ecee72]/50 transition-all">
          <span className="text-5xl font-black text-[#ecee72]/20 absolute top-4 right-6 group-hover:text-[#ecee72]/40 transition-colors">02</span>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ecee72] rounded-full"></span>
            Tag Billeder
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Du behøver ikke tage billeder af hver enkelt ting. Stil dem op på en række så vi kan se titlerne på ryggen. Et par skarpe overbliksbilleder er nok til en start.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-[#ecee72]/50 transition-all">
          <span className="text-5xl font-black text-[#ecee72]/20 absolute top-4 right-6 group-hover:text-[#ecee72]/40 transition-colors">03</span>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ecee72] rounded-full"></span>
            Send til os
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Send billederne og en kort beskrivelse via vores kontaktformular eller mail. Vi vender tilbage med et uforpligtende prisoverslag inden for 24 timer.
          </p>
        </div>
      </div>

      {/* Bonus tips boks */}
      <div className="bg-[#ecee72]/5 border border-[#ecee72]/20 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#ecee72]/10 blur-3xl rounded-full"></div>
        <h4 className="text-[#ecee72] font-bold uppercase tracking-widest text-sm mb-4">Pro Tips for en bedre pris</h4>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-start gap-3 text-gray-300">
            <span className="text-[#ecee72] mt-1">✦</span>
            <span>Rengør covers for klistermærker hvis muligt.</span>
          </li>
          <li className="flex items-start gap-3 text-gray-300">
            <span className="text-[#ecee72] mt-1">✦</span>
            <span>Hold limited editions og box-sets samlet.</span>
          </li>
          <li className="flex items-start gap-3 text-gray-300">
            <span className="text-[#ecee72] mt-1">✦</span>
            <span>Hav fokus på retro-spil; covers og manualer trækker prisen op!</span>
          </li>
          <li className="flex items-start gap-3 text-gray-300">
            <span className="text-[#ecee72] mt-1">✦</span>
            <span>Store samlinger kan vi ofte afhente på din adresse.</span>
          </li>
        </ul>
      </div>

      {/* CTA knap direkte i komponenten */}
      <div className="flex justify-center pt-6">
        <button onClick={() => navigate('/salesguide/form')} className="w-50 py-4 bg-[#ecee72] text-black font-black uppercase tracking-widest rounded-xl hover:bg-white hover:border-[#ecee72] transition-all active:scale-[0.98] shadow-xl shadow-[#ecee72]/5">
          Klar til at sælge? Kontakt os nu
        </button>
      </div>

    </div>
  );
};

export default SalesGuide;