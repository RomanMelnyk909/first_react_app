import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className="container">
          <div className="footerInner">
            <div className="footerAuthor">
              <div className="author">2021 Romko first app on React</div>
              <div className="rigts">All Rigts Reserved</div>
            </div>
            <div className="footerMap">
              <div className="map">Карта сайту</div>
              <div className="googleMap">GoogleSiteMap</div>
            </div>
            <nav className="footerNav">
              <ul>
                <li><a href="#">Контакти</a></li>
                <li><a href="#">Гарантії</a></li>
                <li><a href="#">Про сервіс Rakets24</a></li>
                <li><a href="#">Умови повернення</a></li>
                <li><a href="#">Угода про користуванням сервісом</a></li>
              </ul>
            </nav>

          </div>
        </div>

      </div>

    );
  }
}

export default Footer;