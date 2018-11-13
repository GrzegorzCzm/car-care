
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './css/App.css';
import Home from './components/Home';
import Menu from './components/assets/general/Menu';
import AppTopBar from './components/assets/general/AppTopBar';
import Expenses from './components/assets/Expenses';
import Refueling from './components/assets/Refueling';
import Settings from './components/assets/Settings';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Menu />
          <AppTopBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/refueling" component={Refueling} />
          <Route exact path="/settings" component={Settings} />


        </div>
      </Router>
    );
  }
}

export default App;
