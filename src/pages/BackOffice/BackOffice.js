import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BackOffice.css";
import back_office from "../../assets/back_office.jpg";

function BackOffice() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="back-hero">
        <div className="hero-overlay text-white text-center" data-aos="zoom-in">
          <h1 className="display-4">Back Office Services</h1>
          <p className="lead px-3">
            Efficient, Reliable & Tailored Back Office Support for Your Business
          </p>
        </div>
      </section>

      {/* ================= SERVICES INTRO ================= */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <img src={back_office} className="img-fluid rounded shadow" alt="Back Office Services"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="mb-3 brand-primary">What We Do</h2>
            <p>
              Our Back Office Services are designed to streamline your business workflows, reduce operational costs, and ensure seamless data & task management.
            </p>
            <ul className="back-list">
              <li>Data Entry & Validation</li>
              <li>CRM Updates & Management</li>
              <li>Order Processing</li>
              <li>Email & Chat Support (Non-Voice)</li>
              <li>Invoice & Billing Support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="back-features py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 brand-secondary" data-aos="fade-up">
            Our Key Features
          </h2>

          <div className="row text-center">
            {[
              {
                title: "Accurate Data Management",
                desc: "No errors, no rework — ensuring quality and consistency."
              },
              {
                title: "Fast Turnaround",
                desc: "Ensure deadlines are met without compromising quality."
              },
              {
                title: "Custom Workflow Setup",
                desc: "Flexible team setup to match your process needs."
              },
              {
                title: "Confidentiality",
                desc: "Secure processing with strict data security standards."
              }
            ].map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div 
                  className="feature-card p-4 h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <h6 className="brand-primary">{item.title}</h6>
                  <p className="mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="cta-back text-center text-white py-5">
        <div data-aos="fade-up">
          <h3>Ready to Streamline Your Operations?</h3>
          <p>
            Get in touch with us for tailored back office solutions.
          </p>
          <a href="/contact" className="btn btn-light mt-3">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default BackOffice;
