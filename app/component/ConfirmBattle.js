var React = require('react');
var UserProfile = require('./UserProfile');
var styles = {
	breakWord: {
		wordWrap: 'break-word'
	},
	rect: {
		width: '100px',
		height: '100px'
	}
};

function ConfirmBattle(props) {
	if (props.isLoading) {
		return (
			<p>
				Loading ...
			</p>
		)
	}

	return (
		<div className="jumbotron col-sm-12 text-center">
			<h1> Start Battle.</h1>
			
			<div className="col-sm-6" style={styles.breakWord} >
				<UserProfile  data={props.playerInfo[0]} />
			</div>
			<div className="col-sm-6" style={styles.breakWord} >
				<UserProfile  data={props.playerInfo[1]} />
			</div>
		</div>
	)
};

module.exports = ConfirmBattle;