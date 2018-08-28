import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class Map extends Component {

  render() {

    let handleCloseClick = () => {
      this.props.closeInfoWindow()
    }

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {this.props.places.map(place => (
          <Marker key={place.venue.id}
                  position={{ lat: place.venue.location.lat, lng: place.venue.location.lng }}
                  onClick={e => this.props.handleMarkerClick(e, { lat: place.venue.location.lat , lng: place.venue.location.lng}, place.venue.id)}>
            {this.props.openedMarker===place.venue.id && (
              <InfoWindow onCloseClick={handleCloseClick}>
                <h2>{place.venue.name}</h2>
              </InfoWindow>
            )}
          </Marker>
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
