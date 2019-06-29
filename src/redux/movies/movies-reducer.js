import {actionTypes} from './movies-actions';

const DEFAULT = {
    movies: {
        languages: [],
        trailers: []
    }
};

function setTrailers(state, payload) {
    return {
        ...state,
        languages: payload[0],
        trailers: payload[1]
    }
}

export default (state = DEFAULT, action) => {
    switch (action.type) {
        case actionTypes.GET_TRAILERS_LIST_SUCCESS:
            return setTrailers(state, action.payload);
        default:
            return state;
    }
}
