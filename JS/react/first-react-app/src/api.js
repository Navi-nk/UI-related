var axios = require('axios');

module.exports = {
	fetchTeams: function(){
		var encodedUri = window.encodedURI('http://localhost:5000/api/teams/');
		console.log('inside');
		return axios.get(encodedUri).then(function(response){
			return response.data;

		})
	}
}