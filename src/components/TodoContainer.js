import React from 'react';
import AddTask from './AddTask';
import TasksListContainer from './TasksListContainer';

const TodoContainer = () => {
	return (
		<div className="todo-container">
			<AddTask />
			<TasksListContainer />
		</div>
	);
};

export default TodoContainer;
