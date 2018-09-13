import React from 'react';
import TasksList from './TasksList';
import AddTask from './AddTask';
import TasksDoneListContainer from '../TasksDone/TasksDoneListContainer';

const TasksListContainer = props => {
	return (
		<div className="todo-container">
			<div className="tasks-list-container">
				<AddTask />
				<TasksList />
			</div>
			<TasksDoneListContainer />
		</div>
	);
};

export default TasksListContainer;
