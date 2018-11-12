import React, { Component } from 'react';
import TasksList from './TasksList';
import AddTask from './AddTask';

class TasksListContainer extends Component {
	render() {
		return (
			<div className="tasks-list-container">
				<AddTask />
				<h2 className="tasks-list__title">
					lista zadań{' '}
					<strong className="tasks-list__title--yellow">do zrobienia</strong>
				</h2>
				<TasksList />
			</div>
		);
	}
}

export default TasksListContainer;
