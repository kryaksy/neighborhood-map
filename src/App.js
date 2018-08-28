import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import * as FourSquareAPI from './FourSquareAPI'
import SearchList from './components/SearchList';
import Header from './components/Header';

class App extends Component {

  state = {
    places: [],
    isOpen: false,
    defaultCenter: {
      lat: 41.0439991,
      lng: 28.9932452
    },
    defaultZoom: 14,
    center: {
      lat: 41.0439991,
      lng: 28.9932452
    },
    zoom: 14,
    openedMarker: 1,
    icon: "",
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

  handleMarkerClick = (e, latlng, id) => {
    this.setState({
      center: latlng,
      zoom: 16,
      openedMarker: id,
      icon: "https://cdn2.iconfinder.com/data/icons/orientation/32/location-area-pin-1-48.png",
    })
  }

  closeInfoWindow = () => {
    this.setState({
      center: this.state.defaultCenter,
      zoom: this.state.defaultZoom,
      openedMarker: 1,
      icon: ""
    })
  }

  render() {
    return (
      <div className="App">
        <Header toggleList={this.toggleList} />
        <SearchList places={this.state.places}
                    handleMarkerClick={this.handleMarkerClick}
                    />
        <Map places={this.state.places}
             handleMarkerClick={this.handleMarkerClick}
             center={this.state.center}
             zoom={this.state.zoom}
             openedMarker={this.state.openedMarker}
             closeInfoWindow={this.closeInfoWindow}
             icon={this.state.icon}/>
      </div>
    );
  }
}

export default App;
