import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <button className="App-list-button" onClick={this.props.toggleList}>|||</button>
        <h1 className="App-title">Beşiktaş</h1>
      </header>
    )
  }
}

export default Header