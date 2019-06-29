import React, {Component} from 'react';
import './trailer-player.scss';
import Video from "../video/video";
import 'video.js/dist/video-js.css';

class TrailerPlayer extends Component {

    render() {
        const {trailer} = this.props;
        const videoJsOptions = {
            autoplay: true,
            loop: false,
            height: 600,
            sources: [
                {"type": "video/youtube", "src": trailer.TrailerURL}
            ],
            techOrder: ["youtube"],
            youtube: {"ytControls": 2},
            fill: true,
            responsive: true,
            fluid: true,
        };
        return (
            <div className="container trailer-player">
                <div className="columns is-vcentered">
                    <div className="column is-three-fifths">
                        <Video videoJsOptions={videoJsOptions}/>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="title is-size-5 has-text-danger">{trailer.EventTitle}</div>
                                <p className="subtitle is-size-7">{trailer.EventLanguage}</p>
                                <div className="tags">
                                    {trailer.EventGenre.split('|').map((genere) => {
                                        return <span key={genere}
                                                     className="tag has-background-primary has-text-white">{genere}</span>
                                    })}
                                </div>
                                <label className="label">Release Date</label><span
                                className="is-size-7">{trailer.DispReleaseDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrailerPlayer;
