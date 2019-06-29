import {createStore, combineReducers, applyMiddleware} from 'redux';
import messageReducer from './message/messageReducer';
import movieReducer from './movies/movies-reducer';
import thunk from 'redux-thunk';

export function configureStore() {
    return createStore(
        combineReducers({
            messageReducer,
            movieReducer
        }),
        applyMiddleware(
            thunk
        )
    );
}
