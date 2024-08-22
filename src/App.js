import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import ramsImage from './rams1.png';

const Home = () => 
  <section>
    <h1>Home</h1>
    <p>Welcome to the home page!</p>
    <img className="image" src={ramsImage} alt="Rams" />
  </section>;
const About = () => 
  <section>
    <h1>About</h1>
    <p>Learn more about us.</p>
  </section>;
const Services = () => 
  <section>
    <h1>Services</h1>
    <p>Discover the services we offer.</p>
  </section>;
const Contact = () => 
  <section>
    <h1>Contact</h1>
    <p>Get in touch with us!</p>
  </section>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>My Website</header>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>Thanks for visiting!</footer>
      </div>
    </Router>
  );
};

export default App;
