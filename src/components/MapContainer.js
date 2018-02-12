import React from 'react';
import {getGoogleKey, Map, Marker, GoogleApiComponent} from '../external'
import {connect} from 'react-redux'

const
    mapState = ({marker}) => ({marker})

const _MapContainer = connect(mapState)(class extends React.Component {
    render () {
        return (
            <div>
                <Map google={this.props.google}>
                    {this.props.marker &&
                        <Marker
                            {...this.props.marker}
                            // onMarkerClick={this.props.onMarkerClick}
                        />
                    }
                </Map>
            </div>
        )
    }
})

export const MapContainer = GoogleApiComponent({
    apiKey: getGoogleKey()
})(_MapContainer)
