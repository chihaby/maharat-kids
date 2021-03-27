import React from 'react';
import { Image, Grid, List } from 'semantic-ui-react';
import digital from '../assets/digital.jpg';
import support from '../assets/support.jpg';
import reading from '../assets/reading.jpg';

const Produits = () => {
  return (
    <div style={{ marginTop: '3em' }}>
      <h1>Nos Produits et Services</h1>

      <Grid divided='vertically' style={{ marginTop: '2em' }}>
        <Grid.Row columns={3}>
          <Grid.Column>
            <h2 style={{ textAlign: 'center', color: '#8c51ff' }}>
              Application Digitales
            </h2>
            <Image
              className='ui medium image'
              src={digital}
              style={{ marginTop: '2em' }}
            />
            <List.Item as='li' style={{ marginTop: '2em' }}>
              <span style={{ fontWeight: 'bold' }}>Français</span>
              <List.List>
                <List.Item>Expert Vocabulaire</List.Item>
                <List.Item>Le Coin Grammaire</List.Item>
                <List.Item>Champions d'Orthographe</List.Item>
              </List.List>
              <br />
            </List.Item>{' '}
            <List.Item as='li'>
              <span style={{ fontWeight: 'bold' }}>Arabe</span>
              <List.List>
                <List.Item>Vocabulaire</List.Item>
                <List.Item>Grammaire</List.Item>
                <List.Item>Orthographe</List.Item>
              </List.List>
            </List.Item>
          </Grid.Column>
          <Grid.Column>
            <h2 style={{ textAlign: 'center', color: '#8c51ff' }}>
              Supports Pédagogiques
            </h2>
            <Image
              className='ui medium image'
              src={support}
              style={{ marginTop: '2em' }}
            />
            <List as='ul' style={{ marginTop: '2em' }}>
              <List.Item as='li'>
                <span style={{ fontWeight: 'bold' }}>Français</span>
              </List.Item>
              <List.Item as='li'>
                <span style={{ fontWeight: 'bold' }}>Arabe</span>
              </List.Item>
              <List.Item as='li'>
                <span style={{ fontWeight: 'bold' }}>Anglais</span>
              </List.Item>
              <List.Item as='li'>
                <span style={{ fontWeight: 'bold' }}>Mathématiques</span>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <h2 style={{ textAlign: 'center', color: '#8c51ff' }}>
              Formations
            </h2>
            <Image
              className='ui medium image'
              src={reading}
              style={{ marginTop: '2em' }}
            />
            <List as='ul' style={{ marginTop: '2em' }}>
              <List.Item as='li'>
                <span style={{ fontWeight: 'bold' }}>
                  Apprends-moi à Lire et à Ècrire
                </span>
              </List.Item>
              <List.Item as='li'>
                <span style={{ fontWeight: 'bold' }}>
                  L’Art de Raconter l’Histoire en Préscolaire
                </span>
              </List.Item>{' '}
              <List.Item as='li'>
                <span style={{ fontWeight: 'bold' }}>
                  La Culture Générale en Préscolaire
                </span>
              </List.Item>{' '}
              <List.Item as='li'>
                <span style={{ fontWeight: 'bold' }}>
                  Conception des Applications Digitales Boom Learning
                </span>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Produits;
