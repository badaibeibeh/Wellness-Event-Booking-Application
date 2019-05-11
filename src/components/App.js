import React, { Component } from 'react';
import { BrowserRouter as Router, Route, createBrowserHistory } from 'react-router-dom';

import Login from './Login';
// import Auth from './Auth'
// import Routes from "./Routes";
// import { Link } from "react-router-dom";

import HrDashboard from './pages/hr/HrDashboard';

import VendorDashboard from './pages/vendor/VendorDashboard';

// import history from './../history';

class App extends Component {


  render() {
    // let browserHistory = createBrowserHistory();

    return (
      <Router>
        <div>
          <Route path="/" component={Login} exact />
          <Route path="/hr" component={HrDashboard} />
          <Route path="/vendor" component={VendorDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
