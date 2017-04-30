import React, {Component} from 'react';

import ChartBox from '../ChartBox/ChartBox.js';
import DisplayBox from '../DisplayBox/DisplayBox.js';
import api from '../../utils/api.js';

class DisplayBoxOrChart extends Component {
    constructor(props) {
        super(props);

        this.displayChart = this.displayChart.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleData = this.handleData.bind(this);
        this.state = {
            chart: "",
            search: "",
            chartData: "",
        }
    }


    handleData(data) {
        this.setState({
            chartData: data
        });
    }

    handleSearchSubmit(e) {
        console.dir(e);
        if (this.state.search.length >= 3) {
            api.searchChart(this.state.search).then((response) => {
                this.handleData(response);
            }).catch((error) => {
                console.log(error);
                if (error.response.status === 404) {
                    this.handleData("No Charts For Airport");
                }
            });
        } else {
            this.handleData("Invalid airport identifier.  Are you using an ICAO identifier?");
        }
        e.preventDefault();
    }

    handleSearchChange(e) {
        console.dir(e);
        this.setState({
            search: e.target.value.toUpperCase()
        });
    }

    displayChart(url) {
        this.setState({
            chart: url
        });
    }

    render() {
        if (this.state.chart !== "") {
            return <DisplayBox displayChart={this.displayChart} chart={this.props.chart} />
        } else {
            return <ChartBox chartData={this.state.chartData} handleData={this.handleData} handleSearchChange={this.handleSearchChange} searchState={this.state.search} handleSearchSubmit={this.handleSearchSubmit} displayChart={this.displayChart} />
        }
    }
}

export default DisplayBoxOrChart;