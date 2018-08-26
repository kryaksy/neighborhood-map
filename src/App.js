import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import * as FourSquareAPI from './FourSquareAPI'

class App extends Component {

  state = {
    places: []
  }

  componentDidMount() {
    this.getAllPlaces()
  }

  getAllPlaces = () => {
    FourSquareAPI.getAll().then( places => this.setState({ places }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Map places={this.state.places}/>
      </div>
    );
  }
}

export default App;
