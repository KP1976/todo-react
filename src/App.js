import React, { Component } from 'react';
import TasksListContainer from './components/TasksToDo/TasksListContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 className="title">lista zadań</h1>
				<TasksListContainer />
			</div>
		);
	}
}

export default App;
