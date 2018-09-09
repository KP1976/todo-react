import React from 'react';
import AddTask from './AddTask';
import TasksListContainer from './TasksListContainer';
import TasksDoneListContainer from './TasksDoneListContainer';

const TodoContainer = () => {
	return (
		<div className="todo-container">
			<AddTask />
			<TasksListContainer />
			<TasksDoneListContainer />
		</div>
	);
};

export default TodoContainer;
