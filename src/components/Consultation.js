import React from 'react';
import { Image } from 'semantic-ui-react';
import consultation from '../assets/consultation.jpg';

const Consultation = () => {
  return (
    <div>
      <h1>this is Consultation page</h1>{' '}
      <Image
        className='ui small image'
        src={consultation}
        style={{ marginTop: '2em' }}
      />
    </div>
  );
};

export default Consultation;
