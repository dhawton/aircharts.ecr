import React, {Component} from 'react';

import CloseDisplayButton from '../CloseDisplayButton/CloseDisplayButton.js';

class DisplayBox extends Component {
    render() {
        return (
            <CloseDisplayButton closeChart={this.props.displayChart} />
        );
    }
}

export default DisplayBox;