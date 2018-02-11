import React, {Component} from 'react'
import './App.css'
import {MapContainer} from './components'

class App extends Component {
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Ship Tracker</h1>
                </header>
                <MapContainer/>
            </div>
        )
    }
}

export default App
