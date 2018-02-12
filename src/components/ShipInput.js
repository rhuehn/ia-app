import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchShip} from '../actions'

const
    mapState = ({ship: {name}}) => ({name}),
    mapDispatch = dispatch => ({
        searchShip (name) {dispatch(searchShip(name))}
    })

export const ShipInput = connect(mapState, mapDispatch)(class ShipInput extends Component {
    state = {name: this.props.name}

    onChange = e => this.setState({name: e.target.value})

    searchShip = () => this.props.searchShip(this.state.name)

    render () {
        return (
            <div>
                <span>Ship name: </span>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <button onClick={this.searchShip}>Search</button>
            </div>
        )
    }
})