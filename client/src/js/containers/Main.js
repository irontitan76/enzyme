import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { Home, Login, NotFound, Test } from './../containers/';
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
            <Route exact path='/' component={ Home } />
            <Route exact path='/login' component={ Login } />
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
