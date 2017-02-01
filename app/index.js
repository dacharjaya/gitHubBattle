var React = require('react');
var ReactDOM = require('react-dom');

var routes = require('./config/routes');

if (typeof window !== 'undefined') {
    window.React = React;
    window.ReactDOM = ReactDOM;
}

var HelloWorld = React.createClass({
    render: function () {
        return (
            <div> Hello from {this.props.name} </div>
        );
    }
});

ReactDOM.render(routes, document.getElementById('app'));