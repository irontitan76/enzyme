import React, { Component } from 'react';
import { Card, Container, Grid, Icon, Image } from 'semantic-ui-react';

export default class StoryGrid extends Component {
  constructor() {
    super();

    this.state = {
      posts: [{
        category: 'Politics',
        link: '',
        title: 'Steve Bannon Leaving Breitbart News Amid Criticism From Trump',
        media: 'https://source.unsplash.com/random?politics/1920x1080',
        text: 'Breitbart News chairman Steve Bannon is leaving his publication following sharp criticism from President Donald Trump about Bannon bashing the president\'s son while talking with a controversial author.',
        _creator: 'Ross Sheppard',
        createdAt: '20138423',
        likes: 22,
        comments: 5,
        shares: 8
      }, {
        category: 'Culture',
        link: '',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        media: 'https://source.unsplash.com/random?culture/1920x1080',
        text: 'Breitbart News chairman Steve Bannon is leaving his publication following sharp criticism from President Donald Trump about Bannon bashing the president\'s son while talking with a controversial author.',
        _creator: 'Ross Sheppard',
        createdAt: '20138423'
      }, {
        category: 'Economy',
        link: '',
        title: 'An vero, inquit, quisquam potest probare, quod perceptfum, quod',
        media: 'https://source.unsplash.com/random?economy/1920x1080',
        text: 'Breitbart News chairman Steve Bannon is leaving his publication following sharp criticism from President Donald Trump about Bannon bashing the president\'s son while talking with a controversial author.',
        _creator: 'Ross Sheppard',
        createdAt: '20138423'
      }, {
        category: 'Religion',
        link: '',
        title: 'Qui potest igitur habitare in beata vita summi mali metus?',
        media: 'https://source.unsplash.com/random?religion/1920x1080',
        text: 'Breitbart News chairman Steve Bannon is leaving his publication following sharp criticism from President Donald Trump about Bannon bashing the president\'s son while talking with a controversial author.',
        _creator: 'Ross Sheppard',
      }]
    }
  }
  render() {
    const { posts } = this.state;

    let cards = posts.map((post, key) => (
      <Card key={key} className='story__card' fluid raised onClick={(e) => console.log(e)}>
          <Image style={{ borderRadius: 0 }} className='story__card--image' src={post.media} />
          <Card.Content>
            <Card.Header>{post.title}</Card.Header>
            <Card.Meta>{post.category}</Card.Meta>
            <Card.Description>{`${post.text.substring(0,200)}...`}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span style={{ paddingRight: '1rem' }}>
              <Icon name='retweet' />
              {post.shares}
            </span>
            <span style={{ paddingRight: '1rem' }}>
              <Icon name='star' />
              {post.likes}
            </span>
            <span style={{ paddingRight: '1rem' }}>
              <Icon name='comment outline' />
              {post.comments}
            </span>
            <span>
              <Icon name='mail outline' />
            </span>
          </Card.Content>
      </Card>
    ));


    let remaining = cards.length % 3;
    let first = Math.floor(cards.length / 3);
    let second = Math.floor(cards.length / 3) * 2;
    let third = Math.floor(cards.length / 3) * 3;

    if ( remaining === 1 ) {
      first++;
      second++;
      third++;
    } else if ( remaining === 2 ) {
      first++;
      second += 2;
      third += 2;
    }

    console.log(cards.length);
    console.log(remaining);
    console.log(first, second, third);

    return (
      <Container id='container'>
        <Grid stackable>
          <Grid.Row columns={3}>
            <Grid.Column>{cards.slice(0, first)}</Grid.Column>
            <Grid.Column>{cards.slice(first, second)}</Grid.Column>
            <Grid.Column>{cards.slice(second, third)}</Grid.Column>
          </Grid.Row>
        </Grid>
        {/*<Card.Group itemsPerRow={3}>{cards}</Card.Group>*/}
      </Container>
    );
  }
}
