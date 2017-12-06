import axios from 'axios'

export const fetchTeams = function (){
		var uri = 'http://localhost:5000/api/teams/';

		//this returns a promise object and the inner function returns
		//the actual values once promise is fullfilled
		return axios.get(uri).then((response) => {
			return response.data;
		});
	}


export const storeTeam = function (team){
		var uri = 'http://localhost:5000/api/teams/';

		//this returns a promise object and the inner function returns
		//the actual values once promise is fullfilled
		return axios.post(uri,team).then((response) => {
			return response.data;
		});
	}


export const deleteTeam = function (id){
		var uri = 'http://localhost:5000/api/teams/'+id;

		//this returns a promise object and the inner function returns
		//the actual values once promise is fullfilled
		return axios.delete(uri).then((response) => {
			return response.data;
		});
	}