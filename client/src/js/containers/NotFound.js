import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header } from 'semantic-ui-react';

export const NotFound = () => {
  return (
    <Container textAlign='center' style={{ height: '100%', position: 'relative', top: '20%' }}>
      <Header style={{ fontSize: '7rem' }}>404</Header>
      <Container style={{ paddingBottom: '2rem' }}>PAGE NOT FOUND</Container>
      <Button as={Link} to='/'>Go to PoliTalks</Button>
    </Container>
  );
};

export default NotFound;
