import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

  // Clear filter when source changes
  useEffect(() => {
    dispatch(clearFilter());
  }, [source, dispatch]);

  useEffect(() => {
    console.log("🔄 Shop-komponenten fetcher nu data fra kilden:", source);
    getProducts(source).then(data => setProducts(data));
  }, [source]);

  useEffect(() => {
    if (selectedCategory) {
      // Filter products by category
      const filtered = products.filter(product => {
        // Match category from product name (e.g., "Nordlys (Laravel)" or "Product (WP)")
        // If the product has a type field, use that instead
        if (product.type) {
          return product.type.name === selectedCategory;
        }
        // Fallback: check if name matches category pattern
        return product.name.toLowerCase().includes(selectedCategory.toLowerCase());
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
          <h1>{selectedCategory ? `${selectedCategory}` : 'Alle produkter'}</h1>
          {selectedCategory && (
            <p style={{ color: '#666', marginTop: '10px' }}>
              {filteredProducts.length} produkt{filteredProducts.length !== 1 ? 'er' : ''}
            </p>
          )}
      </div>
      
      <div>
        <div className="shop-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
              Ingen produkter fundet i denne kategori
            </p>
          )}
        </div>
      </div>
    </div>
  );
}