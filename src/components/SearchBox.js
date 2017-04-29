import React, {Component} from 'react';
import './SearchBox.css';
import api from '../utils/api.js';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value.toUpperCase()
        });
    }

    handleSubmit(e) {
        api.searchChart(this.state.value).then((response) => {
            this.props.onSearch(response);
        }).catch((error) => {
            if (error.response.status === 404) {
                alert("No charts found for that airport.");
            } else {
                alert("Unknown error occured");
            }
        });
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="SearchForm">
                <input type="text" onChange={this.handleChange} placeholder="Airport Identifier" value={this.state.value}/>
                <input type="submit" value="Search" className="btn-green" />
            </form>
        )
    }
}

export default SearchBox;