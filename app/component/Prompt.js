var React = require('react');
var PropTypes = React.PropTypes;

function Prompt(props) {
	return (
		<div className="jumbotron text-center">
			<h1>{props.header}</h1>
			<div className="">
				<form onSubmit={props.onSubmitUser}>
					<div className="form-group ">
						<input 
							type="text" 
							placeholder="User Name" 
							value={props.userName} 
							onChange={props.onUpdateUser}
						/>	
					</div>
					<div className="form-group ">
						<button type="submit" className="btn btn-success">Next</button>
					</div>
				</form>
			</div>
		</div>
	) 
}

Prompt.propTypes = {
	header: PropTypes.string.isRequired,
	userName: PropTypes.string.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	onUpdateUser: PropTypes.func.isRequired
}
	

module.exports = Prompt;