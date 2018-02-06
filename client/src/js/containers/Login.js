import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Divider, Form, Grid, Header } from 'semantic-ui-react';
import { pageLoaded } from './utils';
import { navEnable } from '../actions/nav';

export class Login extends Component {
  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
    this._onChange = this._onChange.bind(this);

    this.state = {
      user: '',
      password: ''
    }
  }

  componentDidMount() {
    pageLoaded('Login');
    this.props.dispatch(navEnable(false));
  }

  componentWillUnmount() {
    this.props.dispatch(navEnable(true));
  }

  _onChange(e, { name, value }) {
    return this.setState({ [name]: value });
  }

  _onSubmit(fields) {
    // dispatch(login(fields.username, fields.password, () => (
    //   router.history.push('/')
    // )));
  }

  render() {
    return (
      <div style={{ height: '100%', backgroundColor: '#f4f4f4' }}>
        <Grid id='login' textAlign='center' verticalAlign='middle' style={{ height: '100%' }}>
        <Grid.Column className='login__wrap' style={{ maxWidth: 450 }}>
          <Header className='login__header' as='h1' textAlign='center'>
            LOGO
          </Header>
          <Divider hidden section/>

          <Form className='login__form' onSubmit={this._onSubmit}>
            <Header className='login__header' as='h3' textAlign='center'>
              Are you ready?
            </Header>

            <Form.Input className='login__input' fluid icon='user'
              iconPosition='left' onChange={this._onChange}
              placeholder='E-mail' name='user' />

            <Form.Input className='login__input' fluid icon='lock'
              iconPosition='left' onChange={this._onChange}
              placeholder='Password' name='password' type='password'/>

            <Checkbox toggle label='Save password' style={{ float: 'left' }}/>

            <Link to='/' style={{
                float: 'right',
                fontStyle: 'italic',
                color: 'grey'
              }}>
              Forget password?
            </Link>

            <Divider hidden style={{ clear: 'both' }}/>

            <Button as={Link} to='/login' className='login__button' fluid primary>
              Login
            </Button>

            <Divider horizontal content='OR' />

            <Button as={Link} to='/signup' className='login__button' fluid secondary>
              Sign Up
            </Button>

          </Form>
        </Grid.Column>
      </Grid>
    </div>
    );
  }
}

const select = state => ({
  nav: state.nav
});

export default connect(select)(Login);
