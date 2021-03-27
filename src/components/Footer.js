import React from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={4}>
            <Header inverted as='h4' content='Nos Services' />

            <List link inverted>
              <List.Item as='a'>
                <Link to='/consultation'>Consultation</Link>{' '}
              </List.Item>
              <List.Item as='a'>
                <Link to='/produits'>Produits</Link>
              </List.Item>
              <List.Item as='a'>
                <Link to='/contact'>Contact</Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as='h4' content='Réseaux Sociaux' />

            <List link inverted>
              <List.Item as='a'>
                <a
                  href='https://www.facebook.com/Maharat-Kids-1844191125877326'
                  target='_blank'
                  rel='noreferrer'
                >
                  Facebook
                </a>
              </List.Item>
              {/* <List.Item as='a'>Pinterest</List.Item>
              <List.Item as='a'>Instagram</List.Item> */}
            </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header inverted as='h4' content='Maharat Kids' />
            <p>Centre de Developpement d'Enfants </p>
            <p>Email: maharatkids.info@gmail.com</p>
            <p>Tel: 05 28 23 81 08 - Ville: Agadir</p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default Footer;
