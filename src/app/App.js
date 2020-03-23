import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Gallery from '../gallery/Gallery';
import Sponsors from '../sponsors/Sponsors';
import Contact from '../contact/Contact';
import NoMatch from '../NoMatch';
import { Layout } from '../components/Layout';
import { NavigationBar } from '../components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Layout>
          <Switch>
            <Route exact path={['/', 'home']} component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
