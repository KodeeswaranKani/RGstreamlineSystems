import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer text-center">
      <div className="container">
        <h5>RG Streamline Systems</h5>
        <p>Premium Non-Voice BPO Solutions</p>

        <div className="mb-3">
          <FaFacebook size={25} className="mx-2"/>
          <FaInstagram size={25} className="mx-2"/>
          <FaLinkedin size={25} className="mx-2"/>
        </div>

        <small>© 2026 RG Streamline Systems. All Rights Reserved.</small>
      </div>
    </div>
  );
}

export default Footer;
