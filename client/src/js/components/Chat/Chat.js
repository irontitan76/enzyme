import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export class Chat extends Component {
  render() {
    return (
      <div className='chat'>
        <div className='chat__sidebar'>
          <h3>People</h3>
          <div id='users'></div>
        </div>

        <div className='chat__main'>
          <ol id='messages' className='chat__messages'>
            <li className='message'>
              <div className="message__title">
                <h4>Hello</h4>
                <span>2018-01-24</span>
              </div>
              <div className="message__body">
                <p>World</p>
              </div>
            </li>
          </ol>

          <div className='chat__footer'>
            <form id='message-form'>
            <input name='message' type='text' autoFocus
              autoComplete='off' placeholder='Enter message' />
            <Button content='Send'/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
