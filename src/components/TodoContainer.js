import React, { Component } from 'react';
import TasksListContainer from './TasksToDo/TasksListContainer';
import TasksDoneListContainer from './TasksDone/TasksDoneListContainer';
import { Consumer } from '../context';
import ModifyModal from './TasksToDo/ModifyModal';

class TodoContainer extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					return (
						<div className="todo-container">
							<TasksListContainer />
							<ModifyModal show={value.show} handleClose={value.hideModal} />
							<TasksDoneListContainer />
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default TodoContainer;
