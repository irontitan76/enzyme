import React, { Component } from 'react';
import { Header as Head } from 'semantic-ui-react';

export default class Header extends Component {
  render() {

    return (
      <Head>
        Sample header
        <span style={{ fontWeight: 300, fontSize: '1rem' }}> &nbsp;Subtitle</span>
      </Head>
    );
  }
}

/*
 - With search
 - With NavShare
 - With separator
*/