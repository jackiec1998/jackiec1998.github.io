import React from 'react';
import Header from './Header';
import About from './About';
import Education from './Education';
import Research from './Research';
import './App.css';

function App() {
  return (
    <div id="content">
      <Header />
      <About />
      <Education />
      <Research />
    </div>
  );
}

export default App;
