
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './css/App.css';
import Home from './components/Home';
import ConnectedMenu from './components/assets/general/Menu';
import ConnectedAppTopBar from './components/assets/general/AppTopBar';
import ConnectedExpenses from './components/assets/expenses/Expenses';
import Refueling from './components/assets/refueling/Refueling';
import Settings from './components/assets/settings/Settings';

const App = () => (
  <Router>
    <div className="container">
      <ConnectedMenu />
      <ConnectedAppTopBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/expenses" component={ConnectedExpenses} />
      <Route exact path="/refueling" component={Refueling} />
      <Route exact path="/settings" component={Settings} />
    </div>
  </Router>
);

export default App;
