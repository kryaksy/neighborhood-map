import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import * as FourSquareAPI from './FourSquareAPI'
import SearchList from './components/SearchList';

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
          <button className="App-list-button">|||</button>
          <h1 className="App-title">Beşiktaş</h1>
        </header>
        <SearchList places={this.state.places}/>
        <Map places={this.state.places}/>
      </div>
    );
  }
}

export default App;
