import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearFilter } from '../redux/filterSlice';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

import './Shop.css';

export default function Shop() {
  const dispatch = useDispatch();
  const source = useSelector((state) => state.source.apiSource); // Hent kilden ('wordpress' eller 'laravel')
  const selectedCategory = useSelector((state) => state.filter.selectedCategory);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const formatCategoryTitle = (category) => {
  if (!category) return 'Alle produkter';
  
  // Specielle ord der skal være helt store
  const uppers = ['lp', 'cd'];
  if (uppers.includes(category.toLowerCase())) {
    return category.toUpperCase();
  }
  
  // Gør kun første bogstav stort (Film, Spil, Serier)
  return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
};

  // Clear filter when source changes
  useEffect(() => {
    dispatch(clearFilter());
  }, [source, dispatch]);

  useEffect(() => {
    setIsLoading(true); // True hver gang vi fetcher
    console.log("🔄 Shop-komponenten fetcher nu data fra kilden:", source);
    
    getProducts(source).then(data => {
      setProducts(data);
      setIsLoading(false); // Her vises noget
    });
  }, [source]);

  useEffect(() => {
  if (selectedCategory) {
    const filtered = products.filter(product => {
      if (product.type && product.type.name) {
        return product.type.name.toLowerCase() === selectedCategory.toLowerCase();
      }
      return product.name?.toLowerCase().includes(selectedCategory.toLowerCase());
    });
    
    setFilteredProducts(filtered);
    console.log(`📌 Filtrering efter: ${selectedCategory}, fundet: ${filtered.length}`);
  } else {
    setFilteredProducts(products);
    console.log("🔄 Viser alle produkter");
  }
}, [selectedCategory, products]);

  return (
    
    <div className="shop-container">
      
      <div className="shop-title">
          <h1 className="text-5xl leading-tight">{formatCategoryTitle(selectedCategory)}</h1>
          {selectedCategory && (
            <p style={{ color: '#666', marginTop: '10px' }}>
              {filteredProducts.length} produkt{filteredProducts.length !== 1 ? 'er' : ''}
            </p>
          )}
      </div>
      
      <div>
        <div className="shop-content-wrapper">
          {isLoading ? (
            // Loading-visning
            <div className="shop-status-message">
              <p className="loading-text">Henter produkter...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            // Selve griddet
            <div className="shop-grid">
              {filteredProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          ) : (
            // Fejlmeddelelse
            <div className="shop-status-message">
              <p className='no-products'>
                Ingen produkter fundet i denne kategori
              </p>
              <button 
                className='desc-button' 
                onClick={() => dispatch(clearFilter())}
              >
                Se alle produkter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
