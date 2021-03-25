import React from 'react';
import { Image } from 'semantic-ui-react';
import phone from '../assets/phone.png';

const Contact = () => {
  return (
    <div>
      <h1>this is contact page</h1>

      <div>
        <Image
          className='ui centered large image'
          src={phone}
          style={{ marginTop: '2em' }}
        />
      </div>
    </div>
  );
};

export default Contact;
