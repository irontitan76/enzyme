import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';

export class NavShare extends Component {
  render() {
    return (
      <div>
        <Icon name='twitter' />
        <Icon name='linkedin' />
        <Icon name='facebook' />
      </div>
    );
  }
}

const select = state => ({
  nav: state.nav
});

export default connect(select)(NavShare);
