import React, { useState } from 'react';

const ContactInfo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState('Blandet samling');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-20 animate-in zoom-in duration-500">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#ecee72]/10 rounded-full mb-6">
          <span className="text-[#ecee72] text-4xl">✓</span>
        </div>
        <h2 className="text-3xl font-black uppercase tracking-tighter">Besked modtaget!</h2>
        <p className="text-gray-400 mt-4 max-w-md mx-auto italic">
          Vi har modtaget din forespørgsel og dine billeder. 
          Vores eksperter kigger på din samling med det samme.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-[#ecee72] hover:underline uppercase tracking-widest text-sm font-bold"
        >
          Send en ny henvendelse
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-5 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Info-kolonne */}
      <div className="md:col-span-2 space-y-8">
        <header className="border-l-4 border-[#ecee72] pl-6 py-2">
          <h2 className="text-4xl font-black uppercase tracking-tight">Kontakt Os</h2>
          <p className="text-gray-400 mt-2">Udfyld formularen – jo flere detaljer og billeder, jo bedre bud kan vi give.</p>
        </header>

        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
            <div className="mt-1 text-[#ecee72]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase text-sm tracking-wider">Direkte Email</h4>
              <p className="text-gray-400">salg@disc-shop.dk</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
            <div className="mt-1 text-[#ecee72]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase text-sm tracking-wider">Billed-upload</h4>
              <p className="text-gray-400">Vi modtager gerne .jpg, .png og .heic filer direkte her.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form-kolonne */}
      <div className="md:col-span-3">
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 shadow-2xl">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black ml-1">Navn</label>
              <input required type="text" placeholder="Navn" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#ecee72] focus:ring-1 focus:ring-[#ecee72] transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black ml-1">Email</label>
              <input required type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#ecee72] focus:ring-1 focus:ring-[#ecee72] transition-all outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black ml-1">Hvad vil du sælge?</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#ecee72] transition-all outline-none"
              >
                <option>Blandet samling</option>
                <option>Film (Blu-ray/DVD)</option>
                <option>Musik (CD/LP)</option>
                <option>Spil (Retro/Konsol)</option>
                <option value="Andet">Andet...</option>
              </select>
            </div>

            {/* Betinget tekstfelt - vises kun hvis man vælger "Andet" */}
            <div className={`space-y-2 transition-all duration-300 ${category === 'Andet' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#ecee72] font-black ml-1 text-glow">Specificér venligst</label>
              <input 
                type="text" 
                placeholder="F.eks. Laserdisc, Merchandise..." 
                className="w-full bg-white/5 border border-[#ecee72]/30 rounded-xl px-4 py-3 text-white focus:border-[#ecee72] transition-all outline-none"
              />
            </div>
          </div>

          {/* Billed-upload felt */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black ml-1">Vedhæft billeder (Oversigtsbilleder er fine)</label>
            <div className="relative group">
              <input 
                type="file" 
                multiple 
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
              />
              <div className="w-full bg-white/5 border-2 border-dashed border-white/10 rounded-xl px-4 py-8 text-center group-hover:border-[#ecee72]/50 transition-all">
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  Klik for at vælge filer eller træk dem herover
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black ml-1">Besked & Antal</label>
            <textarea required rows="4" placeholder="Fortæl os lidt om standen og cirka hvor mange titler det drejer sig om..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#ecee72] focus:ring-1 focus:ring-[#ecee72] transition-all outline-none" ></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-[#ecee72] text-black font-black uppercase tracking-widest rounded-xl hover:bg-white hover:border-[#ecee72] transition-all active:scale-[0.98] shadow-xl shadow-[#ecee72]/5">
            Send Forespørgsel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;