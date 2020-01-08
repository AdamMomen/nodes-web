import React, { Component } from 'react';
import { Login } from './components/login.jsx'
import { SignUp } from './components/signup.jsx'
import { Chat } from './components/chat.jsx'

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to CHAT APP</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/login'} className="nav-link"> login </Link></li>
              <li><Link to={'/signup'} className="nav-link">signup</Link></li>
              <li><Link to={'/chat'} className="nav-link">chat</Link></li>

            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/chat' component={Chat} />

          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
