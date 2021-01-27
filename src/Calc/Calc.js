import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calcRate = (e) => {
    e.preventDefault();
    console.log('work');
    let elements = e.target.elements;
    console.log(elements);
    console.log(elements['countCurency'].value);
    console.log(elements['typeCurency'].value);
    let countCurency = elements['countCurency'].value;
    let typeCurency = elements['typeCurency'].value;
    this.setState({ result: (countCurency / this.state.rate[typeCurency]) })

  }

  render() {
    return (
      <div className="calc">
        <div className="calculatorTitle">Калькулятор обміну</div>
        <div className="calculator">
          <p className="formTitle">Я хочу</p>
          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="countCurency" />
              <select name="typeCurency" id="">
                {Object.keys(this.props.rate).map((keyName) =>
                (
                  <option key={keyName} value={keyName}>{keyName}</option>
                )
                )}
              </select>
              <input type="submit" defaultValue="calc" value="Розрахувати" />
            </form>
          </div>
          <h4 className="resultTitle">Результат</h4>
          <ul>
            <li>EUR {this.state.result.toFixed(2)}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Calc;