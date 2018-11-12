import React, { Component } from 'react';
import TasksListContainer from './TasksToDo/TasksListContainer';
import TasksDoneListContainer from './TasksDone/TasksDoneListContainer';
// import ModifyModal from './TasksToDo/ModifyModal';
import { Consumer } from '../context';

class TodoContainer extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					return (
						<div className="todo-container">
							<TasksListContainer />
							{/* <ModifyModal show={value.show} handleClose={value.hideModal} /> */}
							<TasksDoneListContainer />
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default TodoContainer;
