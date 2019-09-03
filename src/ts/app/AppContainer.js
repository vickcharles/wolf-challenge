import React from 'react';

import Header from '../component/common/Header.js';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import Interviews from '../pages/Interviews';

function AppContainer() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/scheduled-interviews" component={Interviews} />
      </Router>
    </div>
  );
}

export default AppContainer;
