import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': {}
    }
    this.currency = ['USD', 'RUB', 'PLN'];
    this.getRate();
  }
  getRate = () => {
    fetch("https://api.exchangeratesapi.io/latest")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ date: data.date });
        let result = {};
        for (let item of this.currency) {
          result[item] = data.rates[item]
        }
        this.setState({ currencyRate: result })
      });
  }
  render() {
    return (
      <div className="Rate">
        <h3 className='mainTitle'>Курс валют на {this.state.date}</h3>
        <div className="mainCurrency">
          {Object.keys(this.state.currencyRate).map((keyName) =>
          (
            <div className="currencyItem" key={keyName}>
              <div className="itemTitle">{keyName}</div>
              <div className="itemValue">
                <div className="value">* for 1 EUR</div>
                <div className="value">{this.state.currencyRate[keyName]
                  .toFixed(2)}</div>
              </div>
            </div>
          )
          )}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }
}

export default Rate;