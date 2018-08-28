import React, { Component } from 'react';

class SearchList extends Component {
  render() {
    return(
      <div className="search-list">
        <input type="text" placeholder="Search Places"></input>
        <ol className="list">
          {this.props.places.map(place => (
            <li key={place.venue.id}>{place.venue.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}

export default SearchList