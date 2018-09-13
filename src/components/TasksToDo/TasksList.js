import React, { Component } from 'react';
import Task from './Task';
import { Consumer } from '../../context';

class TasksList extends Component {
	// state = {
	// 	tasks: [],
	// 	taskName: '',
	// 	date: '',
	// };

	// onChange = e => {
	// 	this.setState({ taskName: e.target.value });
	// };

	// addTask = e => {
	// 	e.preventDefault();
	// 	const today = new Date();
	// 	let day = today.getDate();
	// 	let month = today.getMonth() + 1;
	// 	let year = today.getFullYear();
	// 	let hours = today.getHours();
	// 	let minutes = today.getMinutes();

	// 	if (month < 10) {
	// 		month = '0' + month.toString();
	// 	}

	// 	if (day < 10) {
	// 		day = '0' + day.toString();
	// 	}

	// 	if (hours < 10) {
	// 		hours = '0' + hours.toString();
	// 	}

	// 	if (minutes < 10) {
	// 		minutes = '0' + minutes.toString();
	// 	}

	// 	const date = `${day}.${month}.${year} godz. ${hours}:${minutes}`;

	// 	if (this.props.taskName !== '') {
	// 		const newTask = {
	// 			text: this.props.taskName,
	// 			key: Date.now(),
	// 			date: date,
	// 		};

	// 		this.setState(prevState => {
	// 			return {
	// 				tasks: prevState.tasks.concat(newTask),
	// 			};
	// 		});
	// 	}

	// 	// Czyszczenie inputa
	// 	this.setState({ taskName: '' });
	// };

	// deleteTask = key => {
	// 	const newTasks = this.props.tasks.filter(task => task.key !== key);

	// 	this.setState({ tasks: newTasks });
	// };

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

		// return (
		// 	<div className="tasks-list-container">
		// 		<form className="add-task" onSubmit={this.addTask}>
		// 			<label className="add-task__label">Wpisz nazwę zadania</label>
		// 			<input
		// 				type="text"
		// 				className="add-task__input"
		// 				onChange={this.onChange}
		// 				value={value.taskName}
		// 			/>
		// 			<button type="submit" className="add-task__button">
		// 				dodaj
		// 			</button>
		// 		</form>
		// 		<h2 className="tasks-list-container__title">
		// 			lista zadań{' '}
		// 			<strong className="tasks-list-container__title--yellow">
		// 				do zrobienia
		// 			</strong>
		// 		</h2>
		// 		{/* <Task entries={value.tasks} delete={this.deleteTask} /> */}
		// 		<Task entries={value.tasks} />
		// 	</div>
		// );
	}
}

export default TasksList;
