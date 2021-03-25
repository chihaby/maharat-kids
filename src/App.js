import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Consultation from './components/Consultation';
import Produits from './components/Produits';

const App = () => {
  return (
    <Router>
      <div style={{ marginBottom: '100px' }}>
        <Navbar />
      </div>

      <main>
        <Container>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/produits' component={Produits} exact />
            <Route path='/consultation' component={Consultation} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
