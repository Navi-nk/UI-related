var mongoose = require('mongoose');

//team schema
var teamSchema = mongoose.Schema({
	_id:{
		type:String,
		required:true
	},
	title:{
		type:String,
		required:true
	},
	desc:{
		type:String,
		required:true
	},
	size:{
		type:Number,
		required:true
	}

});

//expose to outside
var Team = module.exports = mongoose.model('Team',teamSchema); 

//get teams
module.exports.getTeams = function(callback, limit){
	Team.find(callback).limit();
}

//get team by ID
module.exports.getTeamById = function(id,callback){
	Team.findById(id,callback);
}

//create team
module.exports.addTeam = function(team,callback){
	Team.create(team,callback);
}