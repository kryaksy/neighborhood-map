import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="App-header" aria-label="Shows list of neighbourhood places and search">
        <button className="App-list-button" onClick={this.props.toggleList} tabIndex = {0}>|||</button>
        <h1 className="App-title">Beşiktaş</h1>
      </header>
    )
  }
}

export default Header