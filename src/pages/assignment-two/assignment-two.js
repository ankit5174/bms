import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './assignment-two.scss';
import TrailerCard from "../../components/trailer-card/trailer-card";
import {convertObjectToArray} from "../../util/util";
import TrailerPlayer from "../../components/trailer-player/trailer-player";

const measureElement = element => {
    const DOMNode = ReactDOM.findDOMNode(element);
    return {
        width: DOMNode.offsetWidth,
        height: DOMNode.offsetHeight,
    };
};

class AssignmentOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trailerPlayer: {
                index: -1,
                url: null,
                enable: false
            },
            columnWidth: null
        }
    }

    componentDidMount() {
        const {getTrailers} = this.props;
        getTrailers();
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        this.columnsNode && this.setState({
            columnWidth: measureElement(this.columnsNode).width
        });
    };

    render() {
        const {trailers} = this.props;
        const {trailerPlayer, columnWidth} = this.state;
        return (
            <div className="container">
                <div ref={node => this.columnsNode = node} className="columns is-multiline">
                    {trailers && convertObjectToArray(trailers).map((trailer, index) => {
                        let showPlayer = columnWidth > 744 ? (parseInt(trailerPlayer.index / 4) * 4 === index) : trailerPlayer.index === index;
                        return (
                            <>
                                {
                                    trailerPlayer.enable
                                    &&
                                    showPlayer
                                    &&
                                    <div key="trailer-player" className="column is-full">
                                        <TrailerPlayer trailer={trailerPlayer.trailer}/>
                                    </div>
                                }
                                <div key={trailer.EventCode} onClick={() => this.setState({
                                    trailerPlayer: {
                                        index: index,
                                        trailer: trailer,
                                        enable: true
                                    }
                                })} className="column is-one-quarter">
                                    <TrailerCard trailer={trailer}/>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default AssignmentOne;
