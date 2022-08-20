import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route,Link, matchPath, NavLink } from "react-router-dom";


function App() {
  return (
    

    <>
    <Router>
      
   <Navbar />
   
   <PortfolioSection />
   <ContactSection />
   <Footer />
   </Router>
   </>
   
  
  );
}

export default App;
