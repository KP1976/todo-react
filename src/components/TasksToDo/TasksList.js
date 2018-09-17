import React, { Component } from 'react';
import Task from './Task';
import { Consumer } from '../../context';

class TasksList extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { tasks } = value;
					return (
						<ul className="tasks-list">
							{/* Mapujemy każdy z elementów w tablicy tasks i przekazujemy propsy(task.id i task czyli cały state) do komponentu Task */}
							{tasks.map(task => (
								<Task key={task.id} task={task} />
							))}
						</ul>
					);
				}}
			</Consumer>
		);
	}
}

export default TasksList;
