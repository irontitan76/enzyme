import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

export default class Notify extends Component {
  render() {
    const { type } = this.props;
    let color;
    delete this.props.type;

    if ( type === 'warning' ) {
      color = 'yellow';
    } else if ( type === 'success' ) {
      color = 'green';
    } else if ( type === 'error' ) {
      color = 'red';
    } else {
      color = 'lightgrey';
    }

    return (
      <Message style={{ color }} {...this.props} />
    );
  }
};

Notify.defaultProps = {
  content: <div><span style={{ color: 'red', paddingRight: '1rem', border: 'none' }}>WARNING </span>This is the message content</div>,
  attached: 'top',
  size: 'small'
}
