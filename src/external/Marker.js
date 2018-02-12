import React from 'react';

export class Marker extends React.Component {

    componentDidUpdate (prevProps) {
        // if ((this.props.map !== prevProps.map) ||
        // (this.props.properties !== prevProps.properties) ||
        // (this.props.mapOn !== prevProps.mapOn)) {
        //   this.renderMarker()
        // }
        this.renderMarker() // TODO fix above test
    }

    renderMarker () {
        let {
            map, google, title
        } = this.props;

        // if the marker has already been drawn, set map on or null
        if (this.marker) {
            if (!this.props.mapOn) {
                this.marker.setMap(null);
            }
            else {
                this.marker.setMap(map)
            }
            return
        }

        let position = new google.maps.LatLng(...this.props.position);

        // if marker does not have mapOn, set visibility to none via
        // setting the map to null
        const pref = {
            map: map,
            position: position,
            title: title
        };

        this.marker = new google.maps.Marker(pref);
        this.marker.addListener('click', (e) => {
            this.props.onMarkerClick(this.marker)
        })

        this.props.addMarker(this.marker)
    }

    render () {
        return null;
    }
}
