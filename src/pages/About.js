import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; 

function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="overlay text-center text-white">
          <div data-aos="zoom-in">
            <h1 className="display-4">About Our BPO Services</h1>
            <p className="lead">
              Delivering Accurate, Secure & Scalable Non-Voice Solutions
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <div className="container py-5">
        <div data-aos="fade-up">
          <h2 className="text-center mb-4 brand-primary">
            We Transform Data Into Business Value
          </h2>
          <p className="text-center mx-auto about-text">
            We specialize in Image Processing, Document Digitalization,
            Back Office Services, and Data Processing. Our mission is to
            provide reliable, accurate, and secure non-voice BPO solutions
            that help businesses operate efficiently and scale confidently.
          </p>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="why-us py-5 bg-light">
        <div className="container">
          <motion.h2 className="text-center mb-5 brand-secondary" data-aos="fade-up"
          initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                   viewport={{ once: false, amount: 0.5 }}
          >
            Why Choose Us
          </motion.h2>

          <div className="row text-center">
            {[
              {
                title: "High Accuracy",
                desc: "Strict quality control ensuring reliable results."
              },
              {
                title: "Data Security",
                desc: "Confidential processes with strong data protection."
              },
              {
                title: "Fast Delivery",
                desc: "On-time project completion with efficiency."
              },
              {
                title: "Scalable Support",
                desc: "Flexible teams to match your growing needs."
              },
            ].map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div
                  className="card about-card p-4 h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <h5 className="brand-primary">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="container py-5">
        <h2 className="text-center mb-4 brand-primary" data-aos="fade-up">
          Our Core Services
        </h2>

        <div className="row text-center">
          {[
            "Image Processing",
            "Document Digitalization",
            "Back Office Support",
            "Data Processing"
          ].map((service, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div
                className="service-box p-4"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <h6>{service}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="cta-about text-center text-white py-5">
        <div data-aos="fade-up">
          <h3>Ready to Elevate Your Business?</h3>
          <p>Partner with us for reliable and scalable BPO solutions.</p>
          <a href="/contact" className="btn btn-light mt-3">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
