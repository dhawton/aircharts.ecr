import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './ChartButton.css';

class ChartButton extends Component {

    render() {
        return (
            <button className="chartButton">{this.props.chartName}</button>
        );
    }
}

export default ChartButton;