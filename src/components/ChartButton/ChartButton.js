import React, {Component} from 'react';
import he from 'he';
import './ChartButton.css';

class ChartButton extends Component {
    constructor(props) {
        super(props);

        this.handleChartClick = this.handleChartClick.bind(this);
    }

    handleChartClick(e) {
        this.props.displayChart(e.target.dataset.url);
    }

    render() {
        return (
            <button className="chartButton" data-url={this.props.chartUrl} onClick={this.handleChartClick}>{he.decode(this.props.chartName)}</button>
        );
    }
}

export default ChartButton;