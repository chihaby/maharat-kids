import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      <Navbar />
      <main>
        <Container>
          <Route>
            <Route path='/' component={Home} exact />
            <Route path='/produits' component={Produits} exact />
            <Route path='/consultation' component={Consultation} exact />
            <Route path='/contact' component={Contact} exact />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
