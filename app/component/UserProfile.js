var React = require('react');
var styles = {
	breakWord: {
		wordWrap: 'break-word'
	},
	rect: {
		width: '100px',
		height: '100px'
	}
};

var UserProfile = function UserProfile(user) {
	return (
		<div>
			<img src={user.data.avatar_url} style={styles.rect} />
			{user.data.name && <li> Hello from  {user.data.name} </li> }
		</div>
	)
}

module.exports = UserProfile;