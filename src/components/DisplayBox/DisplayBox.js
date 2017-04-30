import React, {Component} from 'react';
import './DisplayBox.css';

import CloseDisplayButton from '../CloseDisplayButton/CloseDisplayButton.js';

class DisplayBox extends Component {
    render() {
        return (
            <div>
                <CloseDisplayButton closeChart={this.props.displayChart} />
                <object data={this.props.chart} type="application/pdf" className="PDFobject">Unable to render object, <a href={this.props.chart}>Download</a></object>
            </div>
        )
    }
}

export default DisplayBox;