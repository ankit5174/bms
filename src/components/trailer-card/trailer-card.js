import React, {Component} from 'react';
import './trailer-card.scss';

class TrailerCard extends Component {
    render() {
        const {trailer} = this.props;
        return (
            <div className="card trailer-card">
                <div className="card-image">
                    <figure className="image is-4by5">
                        <img src={`https://in.bmscdn.com/events/moviecard/${trailer.EventCode}.jpg`}
                             alt="Placeholder"/>
                    </figure>
                </div>
                <div className="card-content">
                    <p className="">
                        {trailer.EventTitle}
                    </p>
                </div>
            </div>
        )
    }
}

export default TrailerCard;
