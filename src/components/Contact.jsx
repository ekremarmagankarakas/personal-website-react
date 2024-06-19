function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <div className="contact-main">
        <div className="contact-grid">
          <div className="contact-socials">
            <h3>Socials</h3>
            <p>Below are my social links. You can access my codes through github.</p>
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
          </div>
          <div className="contact-phone">
            <h3>Phone</h3>
            <p>You can access me through one of the following phone number, however, I may not be able to answer right away. You can reach me through whatsapp.</p>
            <h1>US Phone:</h1> <p>+1 (857) 971-0526</p>
          </div>
          <div className="contact-email">
            <h3>Email</h3>
            <p>You can contact via the email below anytime you want. I will make sure to get back to you as soon as possible.</p>
            <h1>Email:</h1> <p>ekremarmagankarakas@gmail.com</p>
          </div>
          <div className="contact-address">
            <h3>Location</h3>
            <p>I am currently located at Boston studying at Northeastern University.</p>
            <h1>Location</h1> <p>Boston, MA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
