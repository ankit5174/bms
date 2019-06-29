import React from 'react';
import videojs from 'video.js'
import youtubevideo from 'videojs-youtube';

class Video extends React.Component {

    componentDidMount() {
        const {videoJsOptions} = this.props;
        this.player = videojs(this.videoNode, videoJsOptions);
    }

    componentDidUpdate(prevProps) {
        if (this.props.videoJsOptions.sources[0].src !== prevProps.videoJsOptions.sources[0].src) {
            this.player.src(this.props.videoJsOptions.sources[0]);
        }
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
            <div>
                <div data-vjs-player>
                    <video ref={node => this.videoNode = node} className="video-js"/>
                </div>
            </div>
        )
    }
}

export default Video;
