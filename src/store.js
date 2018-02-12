import {createStore, applyMiddleware, compose} from "redux"
import reducer from "./reducer"
import thunk from 'redux-thunk'
import {fetchData} from './actions'

const
    initialState = {
        name: '',
        loading: true,
        error: false,
        data: [],
        ship: undefined,
        marker: undefined,
        options: {
            username: 'username',
            latmin: -90,
            latmax: 90,
            lonmin: -180,
            lonmax: 180
        }
    },
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

store.dispatch(fetchData())
