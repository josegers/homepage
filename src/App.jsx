import React, { Component} from 'react';
import { hot } from 'react-hot-loader';
import PageTitle from './components/PageTitle'

class App extends Component{
  render(){
    return(
      <div>
        <PageTitle />
        <p>Bio</p>
      </div>
    );
  }
}

export default hot(module)(App);