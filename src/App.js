import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <div id="hero"><Hero /></div> 
        <div id="about"><About /></div> 
        <div id="portfolio"><Portfolio /></div> 
        <div id="contact"><Contact /></div> 
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
