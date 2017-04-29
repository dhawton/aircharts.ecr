import React, {Component} from 'react';

import ChartBox from './components/ChartBox.js';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="ECR">
                <div className="ECR-header">
                    <h2>AirCharts ECR</h2>
                </div>
                <ChartBox />
            </div>
        );
    }
}

export default App;
