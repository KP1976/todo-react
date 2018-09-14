import React, { Component } from 'react';
import TasksListContainer from './components/TasksToDo/TasksListContainer';
import Provider from './context';

class App extends Component {
	render() {
		return (
			<Provider>
				<div className="App">
					<h1 className="title">lista zadań</h1>
					<TasksListContainer />
				</div>
			</Provider>
		);
	}
}

export default App;
