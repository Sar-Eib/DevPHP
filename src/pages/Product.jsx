import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProduct } from '../services/api';
import { addToCart } from '../redux/cartSlice';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const source = useSelector((state) => state.source.apiSource);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (value) => {
    if (!value) return 'Ikke angivet';

    if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
      const [day, month, year] = value.split('/').map(Number);
      const date = new Date(year, month - 1, day);
      return Number.isNaN(date.getTime())
        ? value
        : date.toLocaleDateString('da-DK', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });
    }

    const date = new Date(value);
    return Number.isNaN(date.getTime())
      ? value
      : date.toLocaleDateString('da-DK', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
  };

  const getTypeDescription = (typeName) => {
    const value = String(typeName || '').toLowerCase();

    if (value === 'film') return 'Film: Historiefortalt videoindhold til afspilning.';
    if (value === 'spil') return 'Spil: Interaktiv underholdning til konsol eller computer.';
    if (value === 'cd') return 'CD: Kompakt disk med lyd, typisk musik.';
    if (value === 'lp') return 'LP: Vinylplade med analog lyd i fuld længde.';

    return 'Produktkategori for denne vare.';
  };

  const getGradeDescription = (gradeName) => {
    const value = String(gradeName || '').toLowerCase();

    if (value === 's') return 'S: Som ny stand med minimale brugsspor.';
    if (value === 'a') return 'A: Meget god stand med få tegn på brug.';
    if (value === 'b') return 'B: God stand med synlige, men acceptable brugsspor.';
    if (value === 'god') return 'God: Varen er funktionel og i pæn stand.';

    return 'Vurdering af produktets fysiske stand.';
  };

  useEffect(() => {
    setLoading(true);
    getSingleProduct(id, source)
      .then((data) => {
        if (data) {
          setProduct(data);
          setError(null);
        } else {
          setError('Produkt ikke fundet');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Fejl ved hentning af produkt');
        setLoading(false);
      });
  }, [id, source]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      alert(`${product.name} tilføjet til kurv`);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto mt-20 max-w-[1200px] p-5">
        <p className="text-white">Indlæser...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto mt-20 max-w-[1200px] p-5">
        <p className="mb-5 font-bold text-red-600">{error}</p>
        <button
          className="mb-8 rounded bg-[#ecee72] px-5 py-2.5 font-bold text-black transition-colors duration-200 hover:bg-black hover:text-[#ecee72]"
          onClick={() => navigate('/shop')}
        >
          Tilbage til butik
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto mt-20 max-w-[1200px] p-5">
        <p className="mb-5 text-white">Produkt ikke fundet</p>
        <button
          className="mb-8 rounded bg-[#ecee72] px-5 py-2.5 font-bold text-black transition-colors duration-200 hover:bg-black hover:text-[#ecee72]"
          onClick={() => navigate('/shop')}
        >
          Tilbage til butik
        </button>
      </div>
    );
  }

  return (
    <div className="relative z-0 mx-auto mt-20 max-w-[1200px] p-5">
      <div className="bg-white p-10 shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
        <button
          className="relative z-0 rounded bg-[#ecee72] px-5 py-2.5 font-bold text-black transition-colors duration-200 hover:bg-black hover:text-[#ecee72]"
          onClick={() => navigate('/shop')}
        >
          ← Tilbage til butik
        </button>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-[500px] w-[400px] border border-[#eee] p-5 object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <h1 className="mb-5 text-[2rem] leading-tight text-black">{product.name}</h1>

          <div className="mb-8 flex items-center gap-4 text-[1.2rem]">
            <span className="font-bold text-[#666]">Pris:</span>
            <span className="rounded bg-black px-4 py-2 text-[1.8rem] font-bold text-[#ecee72]">
              {product.price.toFixed(2)} DKK
            </span>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-[1.1rem] font-semibold text-black">Beskrivelse</h3>
            <p className="m-0 leading-relaxed text-[#666]">{product.desc}</p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="group relative flex cursor-help flex-col rounded border border-[#eee] bg-[#fafafa] px-3 py-2.5">
              <span className="text-[0.8rem] font-bold uppercase tracking-[0.04em] text-[#777]">Type</span>
              <span className="mt-1 text-[0.95rem] text-[#111]">
                {product.type?.name || 'Ikke angivet'}
                {product.type?.name && (
                  <span className="pointer-events-none invisible absolute left-0 top-[calc(100%+8px)] z-20 w-[280px] max-w-[280px] translate-y-1.5 rounded-md bg-[#111] px-2.5 py-2 text-[0.8rem] leading-[1.35] text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {getTypeDescription(product.type.name)}
                  </span>
                )}
              </span>
            </div>

            <div className="group relative flex cursor-help flex-col rounded border border-[#eee] bg-[#fafafa] px-3 py-2.5">
              <span className="text-[0.8rem] font-bold uppercase tracking-[0.04em] text-[#777]">Stand</span>
              <span className="mt-1 text-[0.95rem] text-[#111]">
                {product.grade?.name || 'Ikke angivet'}
                {product.grade?.name && (
                  <span className="pointer-events-none invisible absolute left-0 top-[calc(100%+8px)] z-20 w-[280px] max-w-[280px] translate-y-1.5 rounded-md bg-[#111] px-2.5 py-2 text-[0.8rem] leading-[1.35] text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {getGradeDescription(product.grade.name)}
                  </span>
                )}
              </span>
            </div>

            <div className="flex flex-col rounded border border-[#eee] bg-[#fafafa] px-3 py-2.5">
              <span className="text-[0.8rem] font-bold uppercase tracking-[0.04em] text-[#777]">Digital</span>
              <span className="mt-1 text-[0.95rem] text-[#111]">{product.digital?.name || 'Ikke angivet'}</span>
            </div>

            <div className="flex flex-col rounded border border-[#eee] bg-[#fafafa] px-3 py-2.5">
              <span className="text-[0.8rem] font-bold uppercase tracking-[0.04em] text-[#777]">Lager</span>
              <span className="mt-1 text-[0.95rem] text-[#111]">{product.stock ?? 'Ikke angivet'}</span>
            </div>

            <div className="flex flex-col rounded border border-[#eee] bg-[#fafafa] px-3 py-2.5 sm:col-span-2">
              <span className="text-[0.8rem] font-bold uppercase tracking-[0.04em] text-[#777]">Udgivelse</span>
              <span className="mt-1 text-[0.95rem] text-[#111]">{formatDate(product.release)}</span>
            </div>
          </div>

          <button
            className="w-full rounded bg-[#ecee72] px-8 py-4 text-base font-bold text-black transition-colors duration-200 hover:bg-black hover:text-[#ecee72] active:scale-95"
            onClick={handleAddToCart}
          >
            Tilføj til kurv
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
