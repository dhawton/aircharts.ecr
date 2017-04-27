import React, {Component} from 'react';
import PropTypes from 'prop-types';

let styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

class Loading extends Component {
    constructor(props) {
        super(props);

        this.originalText = props.text;

        this.state = {
            text: this.originalText
        }
    }

    render() {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
};

Loading.defaultProps = {
    text: "Loading",
    speed: 300
};

export default Loading;