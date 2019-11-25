import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Team from './Team';
import Jobs from './Jobs';
import Gallery from './Gallery';
import Sponsors from './Sponsors';
import JoinUs from './JoinUs';
import Contact from './Contact';
import NoMatch from './NoMatch';
import {Layout} from './components/Layout';
import {Navigationbar} from './components/Navigationbar';
{/* hello manya - ayesha */}
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigationbar />
        <Layout>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path="/Home" component={Home}/>
            <Route path = "/Team" component = {Team}/>
            <Route path = "/Jobs" component = {Jobs}/>
            <Route path = "/Gallery" component = {Gallery}/>
            <Route path = "/Sponsors" component = {Sponsors}/>
            <Route path = "/JoinUs" component = {JoinUs}/>
            <Route path = "/Contact" component = {Contact}/>
            <Route component = {NoMatch} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

{/* Hi Im Manyaaa */}

export default App;
