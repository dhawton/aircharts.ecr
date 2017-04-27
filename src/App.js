import React, {Component} from 'react';
import SearchBox from './components/SearchBox.js';
import './App.css';
import './components/Loading.js';
//api = require("./utils/api.js");

class App extends Component {
    render() {
        return (
            <div className="ECR">
                <div className="ECR-header">
                    <h2>AirCharts ECR</h2>
                </div>
                <SearchBox />
            </div>
        );
    }
}

export default App;
