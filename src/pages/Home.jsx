function Discover() {

  return (
    <div className="discover-container">
      {/* Centreret Logo */}
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        {/* Bruger absolut sti fra public mappen */}
        <img 
          style={{ height: '150px', marginBottom: '20px' }} 
          src="/logo-disc.png" 
          alt="Discover Logo" 
        />
        <h1>Velkommen til Discover</h1>
        <p>Udforsk vores univers</p>
      </div>

      {/* Knapper uden funktioner (bare design) */}
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button className="button">
          Se Produkter
        </button>
        <button className="button">
          Om Os
        </button>
      </div>
    </div>
  );
}

export default Discover;