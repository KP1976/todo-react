import React from 'react';
import TasksDoneList from './TasksDoneList';

const TasksDoneListContainer = () => {
	return (
		<div className="tasks-done-list-container">
			<h2 className="tasks-list-container__title">
				lista zadań{' '}
				<strong className="tasks-list-container__title--yellow">
					zrobionych
				</strong>
			</h2>
			<TasksDoneList />
		</div>
	);
};

export default TasksDoneListContainer;
