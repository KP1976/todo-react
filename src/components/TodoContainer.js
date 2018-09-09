import React from 'react';
import AddTask from './AddTask';
import TasksListContainer from './TasksToDo/TasksListContainer';
import TasksDoneListContainer from './TasksDone/TasksDoneListContainer';

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
