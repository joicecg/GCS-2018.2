import React, { Component } from 'react';
import './App.css';
import CardVerbete from './components/cards/CardVerbete'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardVerbete />
      </div>
    );
  }
}

export default App;
