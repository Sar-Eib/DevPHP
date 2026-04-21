export default function Contact() {
  
    return (
    <main className="contact-page">
      <section className="contact-wrapper">

        <div className="contact-left">
          <h1>Contact</h1>
          <p>Lorem ipsum, Lorem ipsum</p>
          <p>Lorem ipsum ipsum, Lorem ipsum</p>
          
          <div className="contact-box">
            <p><strong>Email</strong></p>
            <p>contact@company.com</p>
          </div>
          
          <div className="contact-box">
            <p><strong>Phone</strong></p>
            <p>xx xx xx xx</p>
          </div>
          
          <div className="contact-socials">
            <p>Reach out to us on:</p>
            <div className="icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form>
            <div className="form-group">
              <label>Full Name:</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="Your email address" />
            </div>
            
            <div className="form-group">
              <label>Message:</label>
              <textarea placeholder="Write your message..."></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </section>
    </main>
  );
}