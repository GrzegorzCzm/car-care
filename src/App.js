
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './css/App.css';
import Home from './components/Home';
import Menu from './components/assets/general/Menu';
import AppTopBar from './components/assets/general/AppTopBar';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Menu />
          <AppTopBar />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
