import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div className="navBg">
        <div className="container">
          <nav className="nav">
            <ul className="list">
              <li className="list-item"><a className="itemLink" href="/">Головна</a></li>
              <li className="list-item"><a className="itemLink" href="#">Пункти обміну</a></li>
              <li className="list-item"><a className="itemLink" href="/about">Про нас</a></li>
            </ul>
          </nav>
        </div>
      </div>

    );
  }
}

export default Nav;