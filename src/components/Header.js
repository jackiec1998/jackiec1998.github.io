import React from 'react';
import './Header.css';

const Header = () => (
  <div id="header">
    <img
      src="./images/me.jpg"
      alt="Jackie Chan"
    />
    <div id="information">
      <h1>Jackie Chan</h1>
      <span>he/him/his</span> <br></br>
      <span>Doctoral Student</span>
      <span>University of Illinois</span>
      <span>Department of Computer Science</span> <br></br>
      <tt>jackiec3@illinois.edu</tt>
    </div>
  </div>
);

export default Header;