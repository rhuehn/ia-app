import {SET_DATA, SET_ERR} from './actions'

export default (state, action) => {
    switch (action.type) {
    case SET_DATA:
    {
        console.log(action)
        break
    }
    case SET_ERR:
    {
        console.log(action)
        break
    }
    default:
        break
    }
    return state
}