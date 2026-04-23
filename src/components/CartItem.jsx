export default function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <li className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-2 border-b border-white/10 last:border-0">
      
      {/* Venstre side: Billede og Info */}
      <div className="flex items-center w-full sm:w-auto">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-16 h-16 object-cover rounded-lg mr-4 border border-white/5" 
        />
        <div className="text-left">
          <h4 className="m-0 font-bold text-white text-base md:text-lg">{item.name}</h4>
          <p className="m-0 text-sm text-gray-400">
            Pris: <span className="text-[#ecee72] font-mono">{item.price} kr.</span>
          </p>
        </div>
      </div>

      {/* Højre side: Kontroller (Plus/Minus/Fjern) */}
      <div className="flex items-center justify-between w-full sm:w-auto gap-4 bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl">
        
        {/* Antal vælger */}
        <div className="flex items-center gap-3">
          <button 
            className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-[#ecee72] hover:border-[#ecee72] hover:text-black rounded-full transition-colors text-white font-bold"
            onClick={() => onQuantityChange(item.id, item.quantity, -1)}
          >
            −
          </button>
          
          <span className="min-w-[20px] text-center font-mono font-bold text-white">
            {item.quantity}
          </span>
          
          <button 
            className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-[#ecee72] hover:border-[#ecee72] hover:text-black rounded-full transition-colors text-white font-bold"
            onClick={() => onQuantityChange(item.id, item.quantity, 1)}
          >
            +
          </button>
        </div>

        {/* Fjern knap */}
        <button 
          onClick={() => onRemove(item.id)} 
          className="ml-4 px-3 py-1 text-xs uppercase tracking-widest font-black text-red-500 hover:text-white hover:border-red-500 hover:bg-red-500/20 rounded-md transition-all border border-red-500/30"
        >
          Fjern
        </button>
      </div>

    </li>
  );
}