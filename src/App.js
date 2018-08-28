import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import * as FourSquareAPI from './FourSquareAPI'
import SearchList from './components/SearchList';
import Header from './components/Header';

class App extends Component {

  state = {
    places: [],
    isOpen: false
  }

  componentDidMount() {
    this.getAllPlaces()
  }

  getAllPlaces = () => {
    FourSquareAPI.getAll().then( places => this.setState({ places }))
  }

  toggleList = () => {
    let list = document.getElementsByClassName('search-list')[0]
    list.classList.toggle('open')
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="App">
        <Header toggleList={this.toggleList} />
        <SearchList places={this.state.places}/>
        <Map places={this.state.places}/>
      </div>
    );
  }
}

export default App;
