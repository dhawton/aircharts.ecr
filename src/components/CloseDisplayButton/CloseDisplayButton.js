import React, {Component} from 'react';

class CloseDisplayButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.closeChart("");
    }

    render() {
        return (
            <button className="btn-red" onClick={this.handleClick}>Close Chart</button>
        );
    }
}

export default CloseDisplayButton;