import React, {Component} from 'react';
import SearchBox from '../SearchBox/SearchBox.js';
import ChartList from "../ChartList/ChartList.js";

class ChartBox extends Component {
    render() {
        return (
            <div>
                <SearchBox onSearch={this.props.handleData} handleSearchChange={this.props.handleSearchChange} searchState={this.props.searchState} handleSearchSubmit={this.props.handleSearchSubmit} />
                <ChartList onChartOpen="" chartData={this.props.chartData} displayChart={this.props.displayChart} />
            </div>
        );
    }
}

export default ChartBox;