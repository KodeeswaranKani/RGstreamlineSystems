import { Link } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa"; 
import RG_Logo from "./../assets/RG_logo.jpeg";
import Collapse from "bootstrap/js/dist/collapse";

function Navbar() {

  const closeNavbar = () => { 
        const navbar = document.getElementById("nav");
      if (navbar) {
        const bsCollapse = Collapse.getInstance(navbar) 
          || new Collapse(navbar);
        bsCollapse.hide();
      }
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/"> 
          <img href="/" alt="RG_logo" src={RG_Logo} className="myLogo"/>
        </Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about" onClick={closeNavbar}>About Us</Link></li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/services" data-bs-toggle="dropdown">
                Services  
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/image-processing" onClick={closeNavbar}>Image Processing</Link></li>
                <li><Link className="dropdown-item" to="/document-digitalization" onClick={closeNavbar}>Document Digitalization</Link></li>
                <li><Link className="dropdown-item" to="/back-office" onClick={closeNavbar}>Back Office Services</Link></li>
                <li><Link className="dropdown-item" to="/data-processing" onClick={closeNavbar}>Data Processing</Link></li>
              </ul>
            </li>

            <li className="nav-item"><Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
