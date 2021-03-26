import React from 'react';
import { Image, List, Grid } from 'semantic-ui-react';
import consultation from '../assets/consultation.jpg';

const Consultation = () => {
  return (
    <div>
      <h1>Consultation et Suivi Personalisé</h1>{' '}
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Image
              className='ui medium image'
              src={consultation}
              style={{ marginTop: '2em' }}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <List as='ul'>
              <List.Item as='li'>
                Vous êtes parent engagé et vous désirez assurer le suivi de
                votre enfant en difficulté d’apprentissage tout en étant encadré
                par un professionnel du domaine.
              </List.Item>
              <List.Item as='li'>
                Vous avez la motivation, l’engagement mais vous manquez de
                pédagogie et de ressources
              </List.Item>
              <List.Item as='li'>
                Je vous propose donc mon service qui consiste à vous offrir une
                stratégie de travail sur mesure après évaluation de votre enfant
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Consultation;
