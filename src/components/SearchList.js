import React, { Component } from 'react';

class SearchList extends Component {
  render() {
    return(
      <div className="search-list">
        <input type="text" placeholder="Search Places"></input>
        <ul className="list"></ul>
      </div>
    )
  }
}

export default SearchList