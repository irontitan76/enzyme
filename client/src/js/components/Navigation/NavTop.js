import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

export class NavTop extends Component {
  _renderMenuItems(items) {
    return items.map((item, key) => <Menu.Item
      key={key}
      as={NavLink}
      to={item.path}>{item.label}</Menu.Item>);
  }

  _renderSubMenu() {
    return [
      <div key={1} className='ui right aligned category search item'>
        <div className='ui transparent icon input'>
          <input className='prompt' type='text' placeholder='Search...' />
          <i className='search link icon' />
        </div>
        <div className='results' />
      </div>,
      <Menu.Item key={2} as={ NavLink } to='/login' style={{ color: '#2185d0' }}>Sign in</Menu.Item>,
      <Menu.Item key={3} as={ NavLink } to='/signup' style={{ color: '#2185d0' }}>Get started</Menu.Item>
    ];
  }

  render() {
    const { nav: { items, enabled } } = this.props;

    if ( !enabled ) return null;

    return (
      <div id='topbar'>
        <Menu className='menu' borderless stackable attached='top' pointing>
          <Container>
            <Menu.Item as={ Link } to='/' header>
              PoliTalks
            </Menu.Item>
            { this._renderMenuItems(items) }
            <Menu.Menu position='right'>
              { this._renderSubMenu() }
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}

const select = state => ({
  nav: state.nav
});

export default connect(select)(NavTop);
