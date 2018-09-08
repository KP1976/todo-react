import React, { Component } from 'react';
import TodoContainer from './components/TodoContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 className="title">lista zadań</h1>
				<TodoContainer />
			</div>
		);
	}
}

export default App;
