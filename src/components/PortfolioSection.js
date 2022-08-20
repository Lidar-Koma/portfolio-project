import React from 'react' 

import {Animated} from "react-animated-css";
import 'animate.css';

 
import 'animate.css/animate.css'  // you need to require the css somewhere

const PortfolioSection = () =>(
    
   
  <>
        <div className="container-fluid padding-t" id="home">
        <section className="page-section portfolio" id="portfolio1">
            

            <div className='row horzantal-line' id='mytitle'>
            
            <Animated animationIn="animate__zoomInLeft" animationInDelay="10">
                        <h1 className='' id="title-name">Lidar Koma</h1>
                    </Animated>
                    
                    <Animated animationIn="animate__zoomInRight" animationInDelay="10">
                        <h1 className='' id="title-role">Full Stack Web Developer</h1>
                    </Animated>
                    <div className='col-lg-6 col-sm-6 col-6'>
              
                    <img class="img-fluid headshot" src="assets/img/portfolio/lidar5.png" alt="Lidar Koma" />
                
               
                </div>
                <div className='col-lg-6 col-md-6 col-6 about-me'>
                <h1 className='about-me'>About me</h1>
                <p className='about-me'>
                    Hello! I'm a Chicago-based, full stack JAVA developer with a passion for learning, creating, and problem solving. I work with JAVA/PHP, Spring Boot Framework, Laravel framework, SQL Server/MYSQL, Javascript, ReactJS, Angular, Bootstrap UI, and CSS3/SCSS/SASS.</p>
                </div>
               
                
            </div>
           
        
   </section>

        <div className="row justify-content-center" name="portfolio" id="portfolio">
        <h1 class="text-center section-title">Portfolio</h1>

        <div id="makeupAPI" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 portfolio-item">
                    <h3 class="text-center">Images Search</h3>
                    <div class="portfolio-image-container">

                        <a href="https://lidar-koma.github.io/gallery-app" target="blank">
                            <img className="img-fluid portfolio-image-container" src="assets/img/portfolio/first1.png" class="img-responsive  img-shadow" /></a>
                    </div>
                    <div class="portfolio-description">
                        <p>Images search page, which fetches data from an API and displays the relevant images<br/> ReactJS, Axios, HTML, CSS, API</p>
                    </div>
                </div>
                <div id="jWeather" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 portfolio-item">
                    <h3 class="text-center">Random Quote Generator</h3>
                    <div class="portfolio-image-container">

                        <a href="https://lidar-koma.github.io/random-quote-generator/" target="blank">
                            <img className="img-fluid portfolio-image-container" src="assets/img/portfolio/random-quote-generator.png" class="img-responsive  img-shadow" /></a>
                    </div>
                    <div class="portfolio-description">
                        <p>Random quote generator, with randomized background colors changes of the section
                            <br/> ReactJS, ReactJS Hook Bootstrap UI, Axios, JSON, Rest API</p>
                    </div>
                </div>
                <div id="jWeather" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 portfolio-item">
                    <h3 class="text-center">List of Courses</h3>
                    <div class="portfolio-image-container">

                        <a href="https://lidar-koma.github.io/courses-app/" target="blank">
                            <img className="img-fluid portfolio-image-container" src="assets/img/portfolio/courses-app.png" class="img-responsive  img-shadow" /></a>
                    </div>
                    <div class="portfolio-description">
                        <p>List some courses and the information from online resources, such as linkedin, coursera, pluralsight and udemy
                            <br/>Creating backend app by using Spring Boot Rest API, PostgreSQL, Heroku, Postman, ReactJS, ReactJS Hooks Bootstrap UI, Axios/Fetch</p>
                    </div>
                </div>
              

         
         
          
            
        
        </div>
       
    
  
   

</div>
</>
)

export default PortfolioSection