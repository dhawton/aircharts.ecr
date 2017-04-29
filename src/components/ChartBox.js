import React, {Component} from 'react';
import SearchBox from './SearchBox.js';

class ChartBox extends Component {

    render() {
        return (
            <SearchBox onSearch={this.props.handleSubmit} />
        );
    }
}

export default ChartBox;