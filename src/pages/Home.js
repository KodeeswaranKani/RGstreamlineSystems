 
import { useEffect } from "react";
import { FaDatabase, FaFileAlt, FaCogs, FaImage, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import slide1 from "../assets/bpo_Image1.jpg"; 
import slide2 from "../assets/bpo_Image2.jpg";
import slide3 from "../assets/bpo_Image3.png";
import about from "../assets/aboutus.jpg";
import ServicesHorizontal from "../components/ServicesHorizontal/Services_Horizontal";


function Home() {

  useEffect(() => {
    const carousel = document.querySelector('#heroCarousel');
    if (carousel) {
      carousel.addEventListener('slide.bs.carousel', function () {
        const active = carousel.querySelector('.carousel-item.active img');
        if (active) {
          active.classList.remove("zoom");
        }
      });

      carousel.addEventListener('slid.bs.carousel', function () {
        const active = carousel.querySelector('.carousel-item.active img');
        if (active) {
          active.classList.add("zoom");
        }
      });
    }
  }, []);

  return (
    <>
      {/* ================= HERO CAROUSEL ================= */}
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100 zoom" alt="slide1"/>
            <div className="carousel-caption">
              <h1>Premium Non-Voice BPO Solutions</h1>
              <p>Delivering Accuracy, Speed & Excellence</p>
              <Link to="/contact" className="btn btn-primary mt-3">Get Quote</Link>
            </div>
          </div>

          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="slide2"/>
            <div className="carousel-caption">
              <h1>Data Driven Business Support</h1>
              <p>Scalable & Cost Effective Solutions</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="slide3"/>
            <div className="carousel-caption">
              <h1>Accuracy. Confidentiality. Speed.</h1>
              <p>Your Trusted BPO Partner</p>
            </div>
          </div>

        </div>

      </div>

      {/* ================= SERVICES ================= */}
      <div className="container py-5"> 
         <motion.h1 className="text-center mb-5"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                   viewport={{ once: false, amount: 0.5 }}
              >
                  Our Services
              </motion.h1>
        <div className="row text-center">

          {[
            { icon: <FaImage size={40}/>, title: "Image Processing", link: "/image-processing" },
            { icon: <FaFileAlt size={40}/>, title: "Document Digitalization", link: "/document-digitalization" },
            { icon: <FaCogs size={40}/>, title: "Back Office", link: "/back-office" },
            { icon: <FaDatabase size={40}/>, title: "Data Processing", link: "/data-processing" },
          ].map((service, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card service-card p-4 h-100">
                <div className="icon text-primary mb-3">{service.icon}</div>
                <h5>{service.title}</h5>
                <Link to={service.link} className="btn btn-outline-primary mt-3">Read More</Link>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <div className="about-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <motion.div className="col-md-6" 
            initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                   viewport={{ once: false, amount: 0.5 }}
            >  
              <img src={about} alt="about" className="img-fluid rounded shadow"/>
            </motion.div>
            
            <div className="col-md-6">
              <h2>About Our Company</h2>
              <p>
                We provide high-quality Non-Voice BPO services including data processing,
                document management, and back-office support tailored to global clients.
              </p>
              <ul className="list-unstyled">
                <li><FaCheckCircle className="text-primary me-2"/> 99% Accuracy</li>
                <li><FaCheckCircle className="text-primary me-2"/> Fast Turnaround</li>
                <li><FaCheckCircle className="text-primary me-2"/> Data Security</li>
              </ul>
            </div> 
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="cta-section text-center text-white py-5">
        <div className="container">
          <h2>Ready to Scale Your Business?</h2>
          <p>Partner with us for reliable and scalable BPO solutions.</p>
          <Link to="/contact" className="btn btn-light mt-3">Contact Us</Link>
        </div>
      </div>
 
        <div className="container"> 
          <ServicesHorizontal />
        </div> 
      

    </>
  );
}

export default Home;
