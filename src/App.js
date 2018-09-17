import React, { Component } from 'react';
import TodoContainer from './components/TodoContainer';
import Provider from './context';

class App extends Component {
	render() {
		return (
			<Provider>
				<div className="App">
					<h1 className="title">lista zadań</h1>
					<TodoContainer />
				</div>
			</Provider>
		);
	}
}

export default App;
