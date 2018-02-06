import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Icon, Segment } from 'semantic-ui-react';

export default class Ticker extends Component {
  constructor() {
    super();

    this.state = {
      features: [
        {
          title: 'Website Under Maintenance',
          icon: {
            name: 'warning sign',
            color: 'yellow'
          }
        },
        {
          title: 'Site Deploys in Six Months',
          icon: {
            name: 'check circle outline',
            color: 'green'
          }
        },
        {
          title: 'App Deploys in Nine Months',
          icon: {
            name: 'ban',
            color: 'red'
          }
        },
        {
          title: 'Intellectual Honesty FTW',
          icon: {
            name: 'lightbulb',
            color: 'blue'
          }
        }
      ]
    };
  }

  render() {
    const { features } = this.state;

    let feedItems = features.map((feature, key) => {
      const { title, icon } = feature;
      return (
        <Link key={key} className='ticker__item' to='/'>
          <Icon key={key} { ...icon } /> {title}
        </Link>
      );
    });

    return (
      <Segment className='ticker__segment' size='mini' attached>
        <div className='ticker__wrap'>
          <div className='ticker'>
            {feedItems}
          </div>
        </div>
      </Segment>
    );
  }
}
