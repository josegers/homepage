import React from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BioPage from './pages/BioPage/BioPage';
import TechPage from './pages/TechPage/TechPage';
import CvPage from './pages/CvPage/CvPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFound404 from './pages/System/NotFound404';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BioPage}/>
          <Route path="/bio" component={BioPage}/>
          <Route path="/tech" component={TechPage}/>
          <Route path="/cv" component={CvPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route component={NotFound404} />
        </Switch>
      </Router>
    )
  }
}

export default hot(module)(Main);