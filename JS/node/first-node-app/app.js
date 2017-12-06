var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var cors = require('cors')

app.use(bodyParser.json());
app.use(cors())
Team = require('./models/team');

//connect to mongo
mongoose.connect('mongodb://localhost/practicedb', {useMongoClient: true});
mongoose.Promise = global.Promise;
var db=mongoose.connection;
//Show error if connection fails
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/',function(req,res){
	res.send('Please use /api/teams');
});

//get method
app.get('/api/teams',function(req,res){
	Team.getTeams(function(err,teams){
		if(err){
			throw err;
		}
		res.setHeader('Content-Type', 'application/json');
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.json(teams);
	})
});

//get method with path param
app.get('/api/teams/:_id',function(req,res){
	Team.getTeamById(req.params._id, function(err,team){
		if(err){
			throw err;
		}
		res.setHeader('Content-Type', 'application/json');
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.json(team);
	})
});


//post method
app.post('/api/teams',function(req,res){
	var team = req.body;
	Team.addTeam(team,function(err,team){
		if(err){
			throw err;
		}
		res.setHeader('Content-Type', 'application/json');
		res.json(team);
	})
});

//delete method
app.delete('/api/teams/:_id',function(req,res){
	Team.removeTeam(req.params._id, function(err,team){
		if(err){
			throw err;
		}
		res.setHeader('Content-Type', 'application/json');
		res.json(team);
	})
});

app.listen(5000);
console.log('Running on port 5000');