import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import img2 from '../assets/img2.jpg';

const Home = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Image src={img2} style={{ marginTop: '2em' }} />
      <Header as='h2'>Qui sommes nous?</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for
        single column layouts.
      </p>
    </Container>
  </div>
);

export default Home;
