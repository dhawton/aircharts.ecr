import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBox from './components/SearchBox.js';
import './App.css';
import './components/Loading.js';
//api = require("./utils/api.js");

class App extends Component {
    constructor(props) {
        super(props);
    }

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
