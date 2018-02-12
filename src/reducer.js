import {SET_DATA, SET_ERR, SET_SHIP} from './actions'

export default (state, action) => {
    switch (action.type) {
    case SET_DATA:
    {
        const {data} = action
        return {...state, data}
        break
    }
    case SET_ERR:
    {
        console.log(action)
        break
    }
    case SET_SHIP:
    {
        const {ship, marker} = action
        return {...state, ship, marker}
        break
    }
    default:
        break
    }
    return state
}