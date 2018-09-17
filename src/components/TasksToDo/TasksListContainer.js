import React from 'react';
import TasksList from './TasksList';
import AddTask from './AddTask';

const TasksListContainer = () => {
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
};

export default TasksListContainer;
