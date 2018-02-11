import React, {Component} from 'react'
import {connect} from 'react-redux'

const mapState = ({ship: {name}}) => ({name})

export const ShipInput = connect(mapState)(class ShipInput extends Component {
    state = {name: this.props.name}

    onChange = e =>  this.setState({name: e.target.value})

    render () {
        return (
            <div>
                <span>Ship name: </span>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <button>Search</button>
            </div>
        )
    }
})