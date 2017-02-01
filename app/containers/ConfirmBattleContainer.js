var React = require('react');
var ConfirmBattle = require('../component/ConfirmBattle');
var gitHubHelpers = require('../utils/gitHubHelpers');

var ConfirmBattleContainer = React.createClass({
	getInitialState() {
		return {
			isLoading: true,
			playerInfo: []
		};
	},
	componentDidMount() {
		var query = this.props.location.query;
		gitHubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function(players){
				this.setState({
					isLoading: false,
					playerInfo: [players[0], players[1]]
				});
			}.bind(this));
	},
	render: function () {
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playerInfo={this.state.playerInfo}
			/>
		)
	}
});

module.exports = ConfirmBattleContainer;