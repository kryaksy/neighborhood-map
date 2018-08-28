import React, { Component } from 'react';

class SearchList extends Component {

  handleItemClick = (e, latlng, id) => {
    this.props.handleMarkerClick(e, latlng, id)
  }

  render() {
    return(
      <div className="search-list">
        <input type="text" placeholder="Search Places"></input>
        <ol className="list">
          {this.props.places.map(place => (
            <li key={place.venue.id}
                onClick={e => this.handleItemClick(e, {lat: place.venue.location.lat, lng: place.venue.location.lng}, place.venue.id)}>{place.venue.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}

export default SearchList