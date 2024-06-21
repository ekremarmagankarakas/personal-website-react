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
              <span className="fa fa-github"></span>
              </a>
              <a
                href="https://linkedin.com/in/ekrem-armagan-karakas"
                target="_blank"
                rel="noopener noreferrer"
              >
              <span className="fa fa-linkedin"></span>
              </a>
            </div>
          </div>
          <div className="contact-phone">
            <h3>Phone</h3>
            <p>You can contact me through the following phone number, however, I may not be able to answer right away. You can reach me through whatsapp.</p>
            <h1>+1 (857) 971-0526</h1>
          </div>
          <div className="contact-email">
            <h3>Email</h3>
            <p>You can contact via the email below anytime you want. I will make sure to get back to you as soon as possible.</p>
            <h1>ekremarmagank@gmail.com</h1>
          </div>
          <div className="contact-address">
            <h3>Location</h3>
            <p>I am currently located in Boston studying at Northeastern University.</p>
            <h1>Boston, MA</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
