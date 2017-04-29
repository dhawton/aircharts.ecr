import React, {Component} from 'react';

class ChartList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="padtop">
                {((typeof this.props.chartData == "string") ?
                    ((this.props.chartData != "")? <span className="error">{this.props.chartData}</span>:"") :
                    "Object")}
            </div>
        );
    }
}

export default ChartList;