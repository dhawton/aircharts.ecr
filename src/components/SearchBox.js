import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e) {
        console.log("Got submission: " + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="searchbox" placeholder="Airport Identifier" value={this.state.value}/>&nbsp;
                <button className="btn-green" type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBox;