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
    defaultZoom: 15,
    center: {
      lat: 41.0439991,
      lng: 28.9932452
    },
    zoom: 15,
    openedMarker: 1,
    defaultIcon: {
      path: 'M8.49,12.38a3.87,3.87,0,1,1,3.83-3.86,3.85,3.85,0,0,1-3.83,3.86M8.49,0A8.52,8.52,0,0,0,0,8.55c0,4.46,3.84,10.21,6.41,13C7.37,22.61,8.49,24,8.49,24s1.2-1.42,2.23-2.5c2.56-2.68,6.25-8.07,6.25-13A8.51,8.51,0,0,0,8.49,0',
      fillColor: 'black',
      fillOpacity: 1,
      scale: 1.6,
    },
    iconSelected: {
      path: 'M8.49,12.38a3.87,3.87,0,1,1,3.83-3.86,3.85,3.85,0,0,1-3.83,3.86M8.49,0A8.52,8.52,0,0,0,0,8.55c0,4.46,3.84,10.21,6.41,13C7.37,22.61,8.49,24,8.49,24s1.2-1.42,2.23-2.5c2.56-2.68,6.25-8.07,6.25-13A8.51,8.51,0,0,0,8.49,0',
      fillColor: 'orange',
      fillOpacity: 1,
      scale: 1.7,
    }
  }

  componentDidMount() {
    this.getAllPlaces()
  }

  getAllPlaces = () => {
    FourSquareAPI.getAll()
      .then( places => this.setState({ places }))
      .catch(error => {
        console.log(error)
      })
  }

  getPlaces = query => {
    FourSquareAPI.getPlaces(query)
      .then( places => this.setState({ places }))
      .catch(error => {
        console.log(error)
      });
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
    })
  }

  closeInfoWindow = () => {
    this.setState({
      center: this.state.defaultCenter,
      zoom: this.state.defaultZoom,
      openedMarker: 1,
    })
  }

  handleQueryChange = query => {
    if(query) {
      this.getPlaces(query)
    } else {
      this.getAllPlaces()
    }
  }

  render() {
    return (
      <div className="App">
        <Header toggleList={this.toggleList} />
        <SearchList places={this.state.places}
                    handleMarkerClick={this.handleMarkerClick}
                    handleQueryChange={this.handleQueryChange}
                    />
        <Map places={this.state.places}
             handleMarkerClick={this.handleMarkerClick}
             center={this.state.center}
             zoom={this.state.zoom}
             openedMarker={this.state.openedMarker}
             closeInfoWindow={this.closeInfoWindow}
             iconSelected={this.state.iconSelected}
             defaultIcon={this.state.defaultIcon}/>
      </div>
    );
  }
}

export default App;
