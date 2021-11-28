import React from 'react';
import Header from './Header';
import About from './About';
import Education from './Education';
import Research from './Research';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div id="content">
      <Header />
      <About />
      <Education />
      <Research />
      <Footer />
    </div>
  );
}

export default App;
