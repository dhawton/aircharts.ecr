var axios = require('axios');

module.exports = {
    searchChart: function(airport) {
        var encodedURI = window.encodeURI("https://api.aircharts.org/v2/Airport/" + airport);

        return axios.get(encodedURI)
            .then(function(response) {
                return response.data;
            });
    }
}
