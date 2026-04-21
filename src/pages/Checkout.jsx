export default function Checkout() {
  return (
    <main className="checkout-page">
      <section className="checkout-steps">
        
        <div className="step">Kurv</div>
        <div className="step active">Kundeinfo</div>
        <div className="step">Levering</div>
        <div className="step">Betaling</div>
        <div className="step">Succes</div>
      
      </section>

      <div className="checkout-container">
        <div className="checkout-form">
          <h2>Kundeinfo</h2>

          <form>
            <input type="text" placeholder="Navn" required />
            <input type="text" placeholder="Adresse" required />
            <input type="text" minLength={4} maxLength={4} placeholder="Postnummer" required />
            <input type="tel" minLength={8} maxLength={8} placeholder="Telefonnummer" required />
            <input type="email" placeholder="Email" required />
          </form>
        </div>

        <div className="checkout-summary">
            <h3>Ordreoversigt</h3>
        </div>

        <div className="order-info">
            <p>Levering:</p>
            <p>Samlet pris:</p>
        </div>
      </div>

    </main>
  );
}