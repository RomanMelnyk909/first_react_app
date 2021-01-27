import React from 'react';
import './Main.css';
import Rate from '../Rate/Rate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../About/About';


class Main extends React.Component {
  // constructor(props) { 
  //     super(props);
  // }
  render() {
    return (
      <main className='main'>
        <div className="container">
          <div className="mainInner">
            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/about" component={About} />
              </Switch>
            </Router>
          </div>
        </div>
      </main>

    );
  }
}

export default Main;