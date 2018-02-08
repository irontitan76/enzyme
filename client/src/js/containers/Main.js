import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { About, Account, Cart, Home, Login, Maintenance, NotFound,
  Service, Signup, Team, Test } from './../containers/';
import { Footer, NavTop } from './../components/';

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <article style={{ height: '100%' }}>
          <NavTop />
          <Switch>
            <Route exact path='/about' component={ About } />
            <Route exact path='/account' component={ Account } />
            <Route exact path='/cart' component={ Cart } />
            <Route exact path='/' component={ Home } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/maintenance' component={ Maintenance } />
            <Route exact path='/service' component={ Service } />
            <Route exact path='/signup' component={ Signup } />
            <Route exact path='/team' component={ Team } />
            <Route exact path='/test' component={ Test } />
            <Route path='/404' component={ NotFound } />
            <Redirect from='*' to='/404' />
          </Switch>
          <Footer />
        </article>
      </Router>
    );
  }
}

export default Main;
