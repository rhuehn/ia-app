import {createStore, applyMiddleware, compose} from "redux"
import reducer from "./reducer"
import thunk from 'redux-thunk'

const
    initialState = {
        ship: {
            name: '',
            searching: false,
            error: ''
        }
    },
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

