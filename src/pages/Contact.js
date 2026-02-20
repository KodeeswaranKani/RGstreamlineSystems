import Hero from "../components/Hero";

function Contact() {
  return (
    <>
      <Hero title="Contact Us" subtitle="We’re ready to serve you" />

      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h4>Get In Touch</h4>
            <form>
              <input className="form-control mb-3" placeholder="Your Name" />
              <input className="form-control mb-3" placeholder="Email Address" />
              <input className="form-control mb-3" placeholder="Phone Number" />
              <textarea className="form-control mb-3" rows="4" placeholder="Your Message"></textarea>
              <button className="btn btn-primary">Send Message</button>
            </form>
          </div>

          <div className="col-md-6">
            <h4>Our Address</h4>
            <p>
              688, Bakthavachalam Colony,<br/>
              Vyasarpadi, Chennai,<br/>
              Tamil Nadu 600039, India.
            </p>
            <p>
              📞 +91 9750679996 <br/>
              📞 +91 9944586996 <br/>
              📞 +91 9894329573
            </p>
            <p>📍 Chennai | Tenkasi</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
