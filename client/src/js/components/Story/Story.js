import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, Icon, Image } from 'semantic-ui-react';

export default class Story extends Component {
  constructor() {
    super();

    this._renderFeatured.bind(this);
    this._renderPosts.bind(this);
  }

  _renderFeatured() {
    const { featured: {
      category, title, media, text, _author, createdAt
    }} = this.props;
    let author = <Link to={_author.url}>{_author.name}</Link>;

    return ([
      <Grid.Column key={1} className='story__image--wrapper' mobile={16} tablet={8} computer={6} >
        <Image className='story__image' src={media} />
      </Grid.Column>,
      <Grid.Column key={2} className='story' mobile={16} tablet={8} computer={6}>
        <Header className='story__category' sub >
          { category.toUpperCase() }
        </Header>
        <Header className='story__header' size='large' >
          <Link to='/'>{title}</Link>
        </Header>
        <div className='line__separator'></div>
        <p className='story__byline'>By {author} - {createdAt}</p>
        <p className='story__text'>{text}</p>
        <p className='story__link--wrapper'>
          <Link className='story__link' to='/'>
            Continue reading{' '}
            <Icon name='angle right' />
          </Link>
        </p>
      </Grid.Column>
    ]);
  }

  _renderPosts() {
    const { posts } = this.props;

    let postItems = posts.map((post, i) => {
      const { title, media } = post;

      return (
        <Grid.Row key={i}>
          <Grid.Column width={1} style={{ height: '100%' }}>
            <Image src={media} floated='left' size='tiny'/>
          </Grid.Column>
          <Grid.Column width={3} style={{height: '100%' }}>
            <p style={{ overflow: 'hidden', fontSize: '0.85rem'}}>
              <Link to='/'>{title}</Link>
            </p>
          </Grid.Column>
        </Grid.Row>
      );

    });

    return (
      <Grid.Column stretched width={4} only='computer'>
        { postItems }
      </Grid.Column>
    );
  }

  render() {

    return (
      <Container>
        <Grid stackable>
          <Grid.Row>
            { this._renderFeatured() }
            { this._renderPosts() }
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
