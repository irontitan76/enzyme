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
        createdAt: '20138423'
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

    return (
      <Container>
        <Grid columns={3} stackable>
          <Grid.Row>
            <Grid.Column>{cards[0]}{cards[2]}</Grid.Column>
            <Grid.Column>{cards[1]}{cards[0]}</Grid.Column>
            <Grid.Column>{cards[2]}{cards[1]}</Grid.Column>
          </Grid.Row>
        </Grid>
        {/*<Card.Group itemsPerRow={3}>{cards}</Card.Group>*/}
      </Container>
    );
  }
}
