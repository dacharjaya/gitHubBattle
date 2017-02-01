var React = require('react');
var Prompt = require('../component/Prompt');

var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return {
			userName: ''
		}
	},
	handleUpdateUser: function onUpdateUser(e) {
		this.setState({
			userName: e.target.value
		})
	},
	handleSubmitUser: function onSubmitUser(e) {
		e.preventDefault();
		this.setState({
			userName: ''
		});

		if (this.props.routeParams.playerOne) {
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.userName
				}
			});
		} else {
			this.context.router.push('/playerTwo/' + this.state.userName)
		}
	},
	render: function () {
		return (
			<Prompt 
				userName={this.state.userName}
				header={this.props.route.header}
				onSubmitUser={this.handleSubmitUser}
				onUpdateUser={this.handleUpdateUser}
			/>
		)
	}
});

module.exports = PromptContainer;