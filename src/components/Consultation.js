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
              <List.Item as='li'>Gaining Access</List.Item>
              <List.Item as='li'>Inviting Friends</List.Item>
              <List.Item as='li'>
                Benefits
                <List.List as='ul'>
                  <List.Item as='li'>
                    <a href='/'>Link to somewhere</a>
                  </List.Item>
                  <List.Item as='li'>Rebates</List.Item>
                  <List.Item as='li'>Discounts</List.Item>
                </List.List>
              </List.Item>
              <List.Item as='li'>Warranty</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Consultation;
