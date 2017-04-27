import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './components/Loading.js';
//api = require("./utils/api.js");

function SearchBar(props) {
    return (
        <p className="searchRow">
            <input type="text" id="searchbox" placeholder="Airport Identifier"/>&nbsp;
            <button className="btn-green" onClick={props.onSearch.bind(null)}>Search</button>
        </p>
    );
}

SearchBar.propTypes = {
    identifier: PropTypes.string,
    onSearch: PropTypes.func.isRequired
};

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            identifier: null
        };

        this.searchAirports = this.searchAirports.bind(this);
    }

    searchAirports() {
        alert(document.getElementById("searchbox").value);
        this.setState(function () {
            return {
                identifier: document.getElementById("searchbox").value.toUpperCase()
            }
        });
        document.getElementById("searchbox").value = this.state.identifier;
        alert("Hi " + this.state.identifier);
    }

    render() {
        return (
            <div className="ECR">
                <div className="ECR-header">
                    <h2>AirCharts ECR</h2>
                </div>
                <SearchBar identifier="" onSearch={this.searchAirports} />
            </div>
        );
    }
}

export default App;
