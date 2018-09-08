import React from 'react';
import TasksList from './TasksList';

const TasksListContainer = () => {
	return (
		<div className="tasks-list-container">
			<h2 className="tasks-list-container__title">
				lista zadań{' '}
				<strong className="tasks-list-container__title--yellow">
					do zrobienia
				</strong>
			</h2>
			<TasksList />
		</div>
	);
};

export default TasksListContainer;
