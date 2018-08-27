import React, { Component} from 'react';
import { hot } from 'react-hot-loader';
import PageTitle from './components/PageTitle'
import PageStructure from './components/PageStructure';

class App extends Component{
  render(){
    return(
      <div>
        <PageTitle />
        <PageStructure />
      </div>
    );
  }
}

export default hot(module)(App);