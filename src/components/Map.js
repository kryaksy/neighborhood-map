import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  render() {

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 41.0439991, lng: 28.9932452 }}
        defaultZoom={14}
      >
        {this.props.places.map(place => (
          <Marker position={{ lat: place.venue.location.lat, lng: place.venue.location.lng }} />
        ))}

      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `93vh`, width: '100vw' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
};

export default Map;
