import React, {Component} from 'react';

import DisplayBoxOrChart from './components/DisplayBoxOrChart/DisplayBoxOrChart.js';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="ECR">
                <div className="ECR-header">
                    <h2>AirCharts ECR</h2>
                </div>
                <DisplayBoxOrChart />
            </div>
        );
    }
}

export default App;
