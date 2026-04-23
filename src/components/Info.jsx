import React from 'react';

const SalesInfo = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      
      {/* Overskrift */}
      <header className="border-l-4 border-[#ecee72] pl-6 py-2">
        <h2 className="text-4xl font-black uppercase tracking-tight">Vores Proces & Priser</h2>
        <p className="text-gray-400 mt-2 text-lg">Gennemsigtighed er nøglen til en god handel.</p>
      </header>

      {/* Vurderingskriterier */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-[#ecee72]">01.</span> Hvad kigger vi efter?
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Når vi modtager din henvendelse, foretager vi en individuel vurdering af hver enkelt titel. Vi kigger primært på tre ting:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-[#ecee72]">•</span>
              <div>
                <span className="text-white font-bold block">Stand (Condition)</span>
                <span className="text-sm text-gray-400">Er skiven ridsefri? Er coveret intakt, eller har det solskader/mærker?</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#ecee72]">•</span>
              <div>
                <span className="text-white font-bold block">Sjældenhed (Rarity)</span>
                <span className="text-sm text-gray-400">Er det en udgået udgave, en Steelbook eller en speciel Box-set?</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[#ecee72]">•</span>
              <div>
                <span className="text-white font-bold block">Markedsværdi</span>
                <span className="text-sm text-gray-400">Vi følger de aktuelle priser på samlermarkedet for at sikre dig den rette pris.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-4 text-[#ecee72]">En fair pris – hver gang</h3>
          <p className="text-gray-300 italic">
            "Vi lever af tilfredse kunder, der har lyst til at sælge til os igen. Derfor giver vi aldrig skambud. Hvis en vare er værdifuld, fortæller vi dig det, og prissætter den derefter."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ecee72]/20 flex items-center justify-center text-[#ecee72]">
              ✓
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Garanteret saglig vurdering</span>
          </div>
        </div>
      </section>

      {/* Workflow - Hvordan foregår det? */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold">Processen fra start til slut</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          <div className="p-6 bg-[#1a1a1a] rounded-xl border-t-2 border-[#ecee72]">
            <span className="text-xs font-black text-gray-500 uppercase">Trin 1</span>
            <h4 className="font-bold mt-2">Vurdering</h4>
            <p className="text-sm text-gray-400 mt-2">Du sender billeder, og vi sender et tilbud.</p>
          </div>

          <div className="p-6 bg-[#1a1a1a] rounded-xl border-t-2 border-[#ecee72]">
            <span className="text-xs font-black text-gray-500 uppercase">Trin 2</span>
            <h4 className="font-bold mt-2">Indlevering</h4>
            <p className="text-sm text-gray-400 mt-2">Send med posten eller aflevér i butikken.</p>
          </div>

          <div className="p-6 bg-[#1a1a1a] rounded-xl border-t-2 border-[#ecee72]">
            <span className="text-xs font-black text-gray-500 uppercase">Trin 3</span>
            <h4 className="font-bold mt-2">Kvalitetstjek</h4>
            <p className="text-sm text-gray-400 mt-2">Vi tjekker stand og bekræfter den endelige pris.</p>
          </div>

          <div className="p-6 bg-[#1a1a1a] rounded-xl border-t-2 border-[#ecee72]">
            <span className="text-xs font-black text-gray-500 uppercase">Trin 4</span>
            <h4 className="font-bold mt-2">Udbetaling</h4>
            <p className="text-sm text-gray-400 mt-2">Pengene overføres straks via MobilePay eller bank.</p>
          </div>

        </div>
      </section>

      {/* Praktisk info boks */}
      <div className="bg-gradient-to-r from-[#ecee72]/10 to-transparent p-1 border-l border-t border-[#ecee72]/20 rounded-2xl">
        <div className="bg-[#0f0f0f] p-6 rounded-2xl">
          <p className="text-gray-400 text-sm">
            <strong className="text-white">Bemærk:</strong> Vi opkøber kun originale udgivelser. Vi køber ikke kopier, hjemmebrændte discs eller varer uden originalt cover. Ved større samlinger (over 200 enheder) tilbyder vi afhentning på din adresse i hele landet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesInfo;