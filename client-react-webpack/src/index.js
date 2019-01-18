import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';

const App = () => (
	<div className="first_div">
	<h1>Hello world</h1>
</div>
)

ReactDOM.render(<App/>, document.getElementById('app'));
