import "./css//contact.css";
import videoBottom from "./video/lc500-bottom.mp4";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="bottom">
      <video
        className="videobottom"
        src={videoBottom}
        autoPlay
        loop
        muted
      ></video>

      <section className="section-bottom">
        <ul className="ul-list-aboutus">
          <p className="text">
            <h1>PerfertShine</h1>
            PerfectShine is synonymous with uncompromising dedication to
            excellence. Our team of skilled artisans and detailing experts share
            a passion
          </p>
        </ul>
      </section>

      <section className="section-bottom">
        <ul className="ul-list-contact ">
          <h1>Contact</h1>

          <li className="text-contact">
            <a href="https://www.linkedin.com/in/jpmp1998" target="blank">
              <FaLinkedin />
            </a>
          </li>

          <li className="text-contact" >
            <a href="https://github.com/Pedro-maciel-pinheiro" target="blank">
              <FaGithub />
            </a>
          </li>

          <li className="text-contact">
            <a href="https://web.whatsapp.com/send?phone=5561998516239" target="blank">
              <FaSquareWhatsapp />
            </a>
          </li>
          <li className="text-contact">
            <a href="mailto:shionlk98@gmail.com" target="blank">
              <MdEmail />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
