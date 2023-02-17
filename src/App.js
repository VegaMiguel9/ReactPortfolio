import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import '../src/styles/App.css';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <Header />
      <Navbar />
      <Section />
      <Portfolio />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;