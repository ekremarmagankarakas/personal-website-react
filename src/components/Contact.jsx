function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <div className="contact-main">
        <div className="contact-grid">
          <div className="contact-social-icons">
            <a
              href="https://github.com/ekremarmagankarakas"
              target="_blank"
              rel="noopener noreferrer"
            >
            <span class="fa fa-github"></span>
            </a>
            <a
              href="https://linkedin.com/in/ekrem-armagan-karakas"
              target="_blank"
              rel="noopener noreferrer"
            >
            <span class="fa fa-linkedin"></span>
            </a>
          </div>
          <div className="contact-phone">
            <h1>Phone:</h1> <p>(857) 971-0526</p>
          </div>
          <div className="contact-email">
            <h1>Email:</h1> <p>ekremarmagankarakas@gmail.com</p>
          </div>
          <div className="contact-address">
            <h1>Location</h1> <p>Boston, MA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
