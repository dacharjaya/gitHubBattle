var axios = require('axios');


var params = "";

function getUserInfo(userName) {
	return axios.get('https://api.github.com/users/' + userName + params);
}

var helper = {
	getPlayersInfo: function getPlayersInfo(players) {
		return axios.all(players.map(function(userName){
			return getUserInfo(userName);
		})).then(function(info){
			return info.map(function(user){
				return user.data
			});
		}).catch(function(err){console.warn('Error in getPlayersInfo: ', err)});
	}
};

module.exports = helper;