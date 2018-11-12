import React, { Component } from 'react';
import Task from './Task';
import ModifyModal from './ModifyModal';
import { Consumer } from '../../context';

class TasksList extends Component {
	state = {
		id: null,
	};

	myCallBack = (dispatch, id) => {
		this.setState({ id });
	};

	render() {
		return (
			<Consumer>
				{value => {
					const { tasks, dispatch } = value;

					// Zapisujemy w LocalStorage nową tablicę z zadaniami
					localStorage.setItem('tasks', JSON.stringify(tasks));

					return (
						<React.Fragment>
							<ModifyModal
								show={value.show}
								handleClose={value.hideModal}
								callbackFromParent={this.state.id}
							/>
							<ul className="tasks-list">
								{/* Mapujemy każdy z elementów w tablicy tasks i przekazujemy propsy(task.id i task czyli cały state) do komponentu Task */}
								{tasks.map(task => (
									<Task
										key={task.id}
										task={task}
										callbackFromParent={this.myCallBack.bind(
											this,
											dispatch,
											task.id,
										)}
									/>
								))}
							</ul>
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default TasksList;
