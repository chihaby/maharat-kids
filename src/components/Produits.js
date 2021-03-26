import React from 'react';
import { Image } from 'semantic-ui-react';
import produits from '../assets/produits.jpg';

const Produits = () => {
  return (
    <div>
      <h1>Nos Produits et Services</h1>
      <Image
        className='ui centered large image'
        src={produits}
        style={{ marginTop: '2em' }}
      />
    </div>
  );
};

export default Produits;
