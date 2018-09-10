import React from 'react';
import TaskDone from './TaskDone';

const TasksDoneList = () => {
	return (
		<ul className="tasks-done-list">
			<TaskDone />
			<TaskDone />
			<TaskDone />
			<TaskDone />
			<TaskDone />
		</ul>
	);
};

export default TasksDoneList;
