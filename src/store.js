import {createStore} from "redux"
import reducer from "./reducer"

const initialState = {
    ship: {
        name: '',
        searching: false,
        error: ''
    }
}

export const store = createStore(reducer, initialState)

