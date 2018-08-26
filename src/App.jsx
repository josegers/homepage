import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <p>This is a placeholder for my homepage. More to come soon...</p>
      </div>
    );
  }
}

export default hot(module)(App);