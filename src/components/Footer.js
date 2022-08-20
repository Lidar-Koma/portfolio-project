import React from 'react' 
import {Link} from 'react-scroll';

import {Animated} from "react-animated-css";
import 'animate.css';

 
import 'animate.css/animate.css'  // you need to require the css somewhere
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin,faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FaHeart } from "react-icons/fa";



const Footer = () =>(
    <footer className="footer text-center">
    <div className="container">
        <div className="row">
         
            <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <div className="lead mb-0">
                Chicago,  Illinois

                    <br />
                    (224)489-6029
                </div>
            </div>
           
            <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <ul className="navbar-nav ms-auto">

<li className="nav-item active">
  <Link className="nav-link" to="home" spy={true} smooth={true} offset={-50} duration={500}>Home <span className="sr-only">(current)</span></Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="portfolio" spy={true} smooth={true} offset={-73} duration={500}>Portfolio</Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="contact" spy={true} smooth={true} offset={-73} duration={500}>Contact</Link>
</li>

</ul>
            </div>
        
            <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">SOCIAL MEDIA</h4>
                <div className="lead mb-0">
                    <div className="flex singleCol socail-media-icons-white">
                    <Animated animationIn="animate__zoomInLeft"> 
                    <a className="linkedin" href="https://www.linkedin.com/in/lidar-koma-1aaab115/" value={{ color: 'white', size: '50px' }}>
                    
                    <FontAwesomeIcon icon={faLinkedin} spin className="social-icon" value={{ color: 'white', size: '50px' }}/>
                    </a>
                    
                    
                    <a className="twitter" href="https://twitter.com/LidarKoma" style={{color:'red'}}>
                    <FontAwesomeIcon icon={faTwitter} spin className="social-icon"   />
                    </a>
                    <a className='github' href="https://github.com/Lidar-Koma" style={{color:'red'}}>
                    <FontAwesomeIcon icon={faGithub} spin className="social-icon"   />
                    </a>
                    </Animated>
                    </div>

                    
                </div>
             
            </div>
        </div>
    </div>
    <div className="sqs-block-content"><hr/></div>
    <div className="container">
        <div className="row">
         <div className="sqs-block-content">
            <h6 class="sqsrte-small">© <script>document.write(new Date().getFullYear())</script>2022 Lidar Koma
            </h6>
            </div>
       </div>
    </div>
</footer>
)

export default Footer

