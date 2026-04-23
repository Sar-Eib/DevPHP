import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import '../pages/Home.css'; // Vi opretter denne CSS fil

function DiscoverAll() {
  const [wpPreview, setWpPreview] = useState([]);
  const [lvPreview, setLvPreview] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getProducts('wordpress'), getProducts('laravel')])
      .then(([wpData, lvData]) => {
        setWpPreview(wpData);
        setLvPreview(lvData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Kunne ikke hente previews", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="discover-all-wrapper">
      {loading ? (
        <p className="loading-text">Henter produkter fra begge API'er...</p>
      ) : (
        <>
          {/* WordPress Section */}
          <section className="preview-section">
            <h2 className="section-title">
              Produkter fra <span className="wp-color">WordPress</span>
            </h2>
            <div className="horizontal-scroll">
              {wpPreview.map(product => (
                <div key={`wp-${product.id}`} className="scroll-item">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>

          {/* Laravel Section */}
          <section className="preview-section">
            <h2 className="section-title">
              Produkter fra <span className="lv-color">Laravel</span>
            </h2>
            <div className="horizontal-scroll">
              {lvPreview.map(product => (
                <div key={`lv-${product.id}`} className="scroll-item">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default DiscoverAll;