import React, {Component} from 'react';
import './assignement-one.scss';
import {compute} from "../../util/util";

class AssignmentOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: null,
            data: null
        }
    }

    onChange = (event) => {
        const data = event.target.value.split(',');
        data.forEach((item) => {
            item.toString().trim();
        });
        this.setState({
            data: data,
            results: null
        })
    };

    onSubmit = () => {
        const {data} = this.state;
        data && this.setState({
            results: compute(data)
        });
    };

    showResults = () => {
        const {results} = this.state;
        let duplicates = [], uniques = [];
        [...results.keys()].forEach((item) => {
            console.log(item, results.get(item));
            if (results.get(item) === 0) {
                duplicates.push(
                    <span className="tag" key={item}>{item}</span>
                );
            } else {
                results.get(item) > 0 && uniques.push(
                    <span className="tag" key={item}>{item}</span>
                );
            }
        });
        return [duplicates, uniques];
    };

    render() {
        const {results} = this.state;
        return (
            <div className="container">
                <div className="controls">
                    <input onChange={this.onChange} className="input" type="text" placeholder="Range"/>
                    <button onClick={this.onSubmit} className="button submit">Submit</button>
                </div>
                <div>
                    {results && this.showResults().map((result, index) => {
                        let label = index === 0 ? "Duplicates" : "Uniques Newly Added";
                        return (
                            <div key={label}>
                                <label className="label">{label}</label>
                                <div className="tags">
                                    {result}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default AssignmentOne;
