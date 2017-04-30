import React, {Component} from 'react';
import './SearchBox.css';


class SearchBox extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSearchSubmit} className="SearchForm">
                <input type="text" onChange={this.props.handleSearchChange} placeholder="Airport Identifier" value={this.props.searchState}/>
                <input type="submit" value="Search" className="btn-green" />
            </form>
        )
    }
}

export default SearchBox;