import React from 'react';
import TasksListContainer from './TasksToDo/TasksListContainer';
import TasksDoneListContainer from './TasksDone/TasksDoneListContainer';

const TodoContainer = () => {
	return (
		<div className="todo-container">
			<TasksListContainer />
			<TasksDoneListContainer />
		</div>
	);
};

export default TodoContainer;
