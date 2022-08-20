import {Link} from 'react-scroll';
import { NavLink } from "react-router-dom";



/*window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}*/

const Navbar = () => {
  
  const handleCollapse = () => {
    console.log("handleCollapse");
    var nav = document.getElementById("navbarNav");
    var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
  };
  return (
    
    <nav className="navbar navbar-expand-md fixed-top shadow  p-3 bg-body nav">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">

      <li className="nav-item active">
        <Link className="nav-link" to="home" spy={true} smooth={true} offset={-50} duration={500}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="portfolio" spy={true} smooth={true} offset={-73} duration={500}>Portfolio</Link>
      </li>
      <li>
        <a className="nav-link" href="https://drive.google.com/file/d/1LjA2USh_lgRYpwIiq6RkLz-Bj_DShxpy/view?ts=62febc66" target="_blank">Resume</a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="contact" spy={true} smooth={true} offset={-73} duration={500}>Contact</Link>
      </li>
      
    </ul>
    
  </div>
</nav>

  )
}

export default Navbar