import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import img2 from '../assets/img2.png';

const Home = () => (
  <div>
    <Container text style={{ marginTop: '7em' }}>
      <Image src={img2} style={{ marginTop: '2em' }} />
      <Header as='h1'>Qui sommes nous?</Header>
      <p>
        Spécialiste en difficultés d’apprentissage, j’ai pu aider plusieurs
        enfants à surmonter leurs lacunes et acquérir le mécanisme de lecture et
        celui d’écriture de façon efficiente et durable.
      </p>
      <p>
        Chaque jour, mon cerveau fourmille de nouvelles idées et créations que
        je traduis sous forme de supports pédagogiques.
      </p>
      <p>
        {' '}
        Ces derniers sont mon allié n°1 pour réussir ma mission et celle de tous
        les professionnels d’enseignement ambitieux et tournés vers l’avenir.
      </p>
    </Container>
  </div>
);

export default Home;
