import React, {Component} from 'react';

import ChartBox from './components/ChartBox/ChartBox.js';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.displayChart = this.displayChart.bind(this);
        this.state = {
            chart: ""
        }
    }

    displayChart(url) {
        this.setState({
            chart: url
        });
    }

    render() {
        return (
            <div className="ECR">
                <div className="ECR-header">
                    <h2>AirCharts ECR</h2>
                </div>
                <ChartBox displayChart={this.displayChart} />
            </div>
        );
    }
}

export default App;
