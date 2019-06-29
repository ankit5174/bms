import AssignmentTwo from './assignment-two';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getTrailers} from "../../redux/movies/movies-actions";

function mapStateToProps(state) {
    return {
        languages: state.movieReducer.languages,
        trailers: state.movieReducer.trailers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTrailers: () => {dispatch(getTrailers())}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AssignmentTwo));
