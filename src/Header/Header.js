import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className="titleBg">
          <div className="container">
            <h1 className='title'>My first app on React</h1>
          </div>
        </div>
        <Nav />
      </header>

    );
  }
}

export default Header;
