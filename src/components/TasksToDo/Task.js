import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
	// createTasks = task => (
	// <li className="task" key={task.key}>
	// 	<div className="task-texts">
	// 		<p className="task-texts__name-task">{task.text}</p>
	// 		<p className="task-texts__date-task">
	// 			Data wstawienia:{' '}
	// 			<span className="task-texts__date-task-value">{task.date}</span>
	// 		</p>
	// 	</div>
	// 	<div className="task-icons">
	// 		<div className="task-icons__modify-icon">
	// 			<div className="task-icons__modify-icon--yellow-circle" />
	// 		</div>
	// 		<div
	// 			className="task-icons__delete-icon"
	// 			onClick={this.deleteTask.bind(this, task.key, dispatch)}
	// 		>
	// 			<div className="task-icons__delete-icon--red-cross" />
	// 		</div>
	// 	</div>
	// </li>
	// );

	// deleteTask = key => this.props.delete(key);

	test = (date, e) => {
		// console.log(date);
	};

	deleteTask = () => {
		// Wywołujemy funkcje deleteClickHandler, która przekazywana jest jako props z componentu TasksList
		this.props.deleteClickHandler();
	};

	render() {
		// const todoEntries = this.props.entries;
		// const tasksList = todoEntries.map(this.createTasks);
		// return <ul className="tasks-list">{tasksList}</ul>;

		const { text, date } = this.props.task;
		return (
			<li className="task" onClick={this.test.bind(this, date)}>
				<div className="task-texts">
					<p className="task-texts__name-task">{text}</p>
					<p className="task-texts__date-task">
						Data wstawienia:{' '}
						<span className="task-texts__date-task-value">{date}</span>
					</p>
				</div>
				<div className="task-icons">
					<div className="task-icons__modify-icon">
						<div className="task-icons__modify-icon--yellow-circle" />
					</div>
					<div className="task-icons__delete-icon" onClick={this.deleteTask}>
						<div className="task-icons__delete-icon--red-cross" />
					</div>
				</div>
			</li>
		);
	}
}

Task.propTypes = {
	task: PropTypes.object.isRequired,
	deleteClickHandler: PropTypes.func.isRequired,
};

export default Task;
