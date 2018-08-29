import React, { Component } from 'react';

class SearchList extends Component {

  handleItemClick = (e, latlng, id) => {
    this.props.handleMarkerClick(e, latlng, id)
  }

  render() {
    return(
      <div className="search-list" tabIndex={this.props.isOpen ? 0 : -1} aria-hidden={!this.props.isOpen}>
        <input type="text" placeholder="Search" onChange={e => this.props.handleQueryChange(e.target.value)} tabIndex={this.props.isOpen ? 0 : -1} role="textbox" aria-label = "Search places"></input>
        <ol className="list" aria-hidden={!this.props.isOpen} role="menu" arial-label="List of places" tabIndex={this.props.isOpen ? 0 : -1}>
          {this.props.places.map(place => (
            <li key={place.venue.id}
                onClick={e => this.handleItemClick(e, {lat: place.venue.location.lat, lng: place.venue.location.lng}, place.venue.id)}
                onKeyPress={e => this.handleItemClick(e, {lat: place.venue.location.lat, lng: place.venue.location.lng}, place.venue.id)}
                tabIndex={this.props.isOpen ? 0 : -1}>{place.venue.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}

export default SearchList