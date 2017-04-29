import React, {Component} from 'react';

import ChartBox from './components/ChartBox.js';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleData = this.handleData.bind(this);
        this.state = {
            chartData: ""
        }
    }

    handleData(data) {
        console.log(data);
        this.setState({
            chartData: data
        });
    }

    render() {
        return (
            <div className="ECR">
                <div className="ECR-header">
                    <h2>AirCharts ECR</h2>
                </div>
                <ChartBox onSearch={this.handleData} chartData={this.state.chartData} />
            </div>
        );
    }
}

export default App;
