import "./css/product.css";
import "./css//contact.css";
import "./css/video.css";
import Menu from "./menu";
import ScrollE from "./scroll-effect";
import Wheels from "./wheels";
import Images from "./images.js";
import Contact from "./contact.js";
import Videomp4 from "./video.js";


export default function App() {
  return (
    <div className="App">
      <Menu />
      <img className="main-logo" src={Images.logos} />
      <section className="videobg">
        <Videomp4 />
      </section>

      <header id="products" className="App-header">
        <Wheels />
        <a href="https://www.bagriders.com/air-ride-kits.html" target="blank">
        <img className="bg-img" src={Images.SuspensionKit} />
        </a>
      </header>

      <div id="serv" className="serv">
        <h1 className="services-h1 ">Services</h1>
        <ScrollE />
      </div>
      
      
      <footer id="about-us" className="bottom">
      
        <Contact />
      </footer>
    </div>
  );
}
