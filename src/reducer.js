import {SET_DATA, SET_ERR, SET_SHIP} from './actions'

export default (state, action) => {
    switch (action.type) {
    case SET_DATA: {
        const {data} = action
        return {...state, data}
    }
    case SET_ERR: {
        console.log(action)
        break
    }
    case SET_SHIP: {
        const {ship, marker} = action
        return {...state, ship, marker}
    }
    case 'MARKER_CLICK': {
        console.log('MARKER_CLICK')
        break
    }
    case 'ADD_MARKER': {
        const {marker} = action
        return {...state, gmapMarkers: marker}
    }
    default:
        break
    }
    return state
}