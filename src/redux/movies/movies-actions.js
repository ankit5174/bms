import axios from 'axios';

export const actionTypes = {
    GET_TRAILERS_LIST: 'GET_TRAILERS_LIST',
    GET_TRAILERS_LIST_SUCCESS: 'GET_TRAILERS_LIST_SUCCESS',
    GET_TRAILERS_LIST_FAILURE: 'GET_TRAILERS_LIST_FAILURE',
};

export const getTrailers = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.GET_TRAILERS_LIST,
        });
        return axios.get(`/serv/getData?cmd=GETTRAILERS&mtype=cs`).then(
            (response) => dispatch({
                type: actionTypes.GET_TRAILERS_LIST_SUCCESS,
                payload: response.data
            }),
            (err) => dispatch({
                type: actionTypes.GET_TRAILERS_LIST_FAILURE,
                payload: err
            })
        )
    }
};
