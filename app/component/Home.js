var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function () {
		return (
			<div className="jumbotron text-center">
				<h1> Battle Starts</h1>
				<Link to="/playerOne">
					<button className="btn btn-success"> Get Started </button> 
				</Link>
			</div>
		)
	}
});

module.exports = Home;