import React from 'react';
import TasksList from './TasksList';
import AddTasks from './AddTasks';
import TasksDoneListContainer from '../TasksDone/TasksDoneListContainer';

const TasksListContainer = props => {
	return (
		<div className="todo-container">
			<div className="tasks-list-container">
				<AddTasks />
				<TasksList />
			</div>
			<TasksDoneListContainer />
		</div>
	);
};

export default TasksListContainer;
