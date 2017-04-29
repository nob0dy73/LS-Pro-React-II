import React, { Component } from 'react';
import './App.css';
import Header from './NavBar';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={'Clock'} />
        <Clock />
      </div>
    );
  }
}

export default App;
