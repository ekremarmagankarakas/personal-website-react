function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form
        action="mailto:ekremarmagankarakas@gmail.com"
        method="post"
        encType="text/plain"
      >
        <div className="input-box">
          <div className="input-field">
            <input type="text" name="name" placeholder="Full Name" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              required
            />
            <span className="focus"></span>
          </div>
        </div>
        <div className="input-box">
          <div className="input-field">
            <input
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              required
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              required
            />
            <span className="focus"></span>
          </div>
        </div>
        <div className="textarea-field">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <span className="focus"></span>
        </div>
        <div className="btn-box btns">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
