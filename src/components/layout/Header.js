import React from 'react';
import './Header.scss';

import logo from '../../dadjoke.svg';

function Header() {
  return (
    <header>
      <h1>dadjoke.us</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;