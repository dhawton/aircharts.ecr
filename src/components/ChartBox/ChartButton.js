import React, {Component} from 'react';
import he from 'he';
import './ChartButton.css';

class ChartButton extends Component {
    constructor(props) {
        super(props);

        this.handleChartClick = this.handleChartClick.bind(this);
    }

    handleChartClick(e) {
        console.log(e.target);
    }

    render() {
        return (
            <button className="chartButton" data-id={this.props.chartId} onClick={this.handleChartClick}>{he.decode(this.props.chartName)}</button>
        );
    }
}

export default ChartButton;