import React from 'react';
import { Dropdown, Menu, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <Link to='/'>
            <Image
              size='mini'
              src='/logo.png'
              style={{ marginRight: '1.5em' }}
            />
          </Link>
          <Link to='/'>Maharat Kids</Link>
        </Menu.Item>
        <Dropdown item simple text='Services'>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to='/consultation' style={{ color: '#000' }}>
                Consultation
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {' '}
              <Link to='/produits' style={{ color: '#000' }}>
                Produits
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {' '}
              <Link to='/contact' style={{ color: '#000' }}>
                Contact
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
);

export default Navbar;
