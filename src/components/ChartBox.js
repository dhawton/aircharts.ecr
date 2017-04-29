import React, {Component} from 'react';
import SearchBox from './SearchBox.js';
import ChartList from "./ChartList.js";

class ChartBox extends Component {
    constructor(props) {
        super(props);
        this.handleData = this.handleData.bind(this);
        this.state = {
            chartData: ""
        }
    }

    handleData(data) {
        this.setState({
            chartData: data
        });
    }

    render() {
        return (
            <div>
                <SearchBox onSearch={this.handleData} />
                <ChartList onChartOpen="" chartData={this.state.chartData} />
            </div>
        );
    }
}

export default ChartBox;