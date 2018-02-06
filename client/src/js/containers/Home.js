import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pageLoaded } from './utils';

import { Advertisement, Container, Divider, Header } from 'semantic-ui-react';
import { Story, StoryGrid } from './../components';

import { loadArticles } from './../api/home';

export class Home extends Component {
  componentDidMount() {
    pageLoaded('Home');

    loadArticles('rossboss182@gmail.com', 'password', 'Ross Sheppard');
  }

  render() {
    const { articles: { items, featured } } = this.props;

    return (
      <Container id='home'>
        <Header className='content__divider' content="Editor's Choice" />
        <Story posts={items} featured={featured}/>
        <Divider section />
        <Advertisement centered unit='panorama' test='Billboard' />
        <Header className='content__divider' content='Trending' />
        <StoryGrid />
        <Divider section />
      </Container>
    );
  }
}

const select = state => ({
  articles: state.articles
});

export default connect(select)(Home);
